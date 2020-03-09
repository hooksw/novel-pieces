import {getPath, metafile, novelfile, recordfile} from "../node/storage-info";
import {safeWrite} from "../node/safeWrite";
import * as fs from "fs-extra"
import {Chapter, Meta, Novel, Part, Project, Record, Section} from "../types/project";
import {observer} from "../browser/Observer";
import {Events} from "../browser/observer-events";
import {getCache} from "../browser/section-cache";
import v1 = require("uuid/v1");


export let projectIO: ProjectIO = null

export function setProjectIO(e: ProjectIO) {
    projectIO = e
}

export class ProjectIO {
    private readonly projectDir: string
    project: Project
    readonly novelPath: string
    readonly metaPath: string
    readonly recordPath: string
    private novel: Novel
    private meta: Meta
    private record: Record

    constructor(dir: string) {
        this.projectDir = dir
        this.novelPath = this.getPath(novelfile)
        this.metaPath = this.getPath(metafile)
        this.recordPath = this.getPath(recordfile)
    }

    async initProject() {
        this.project = new Project(
            await fs.readJSON(this.metaPath),
            await fs.readJSON(this.novelPath),
            await fs.readJSON(this.recordPath)
        )
        await new Promise(() => {
            this.novel = this.project.novel;
            this.meta = this.project.meta;
            this.record=this.project.record
        })
    }

    beforeUpdateNovel(callback: (e: Novel) => void) {
        callback(this.novel)
        this.saveNovel(this.novel)
        observer.trigger(Events.updateNovel_data,Object.create(this.novel))
    }

    beforeUpdateMeta(callback: (e: Meta) => void) {
        callback(this.meta)
        this.saveMeta(this.meta)
        observer.trigger(Events.updateMeta_data,Object.create(this.meta))
    }

    getPath(file: string) {
        return getPath(this.projectDir, file)
    }


    getSectionPath(uuid: string) {
        return this.getPath(uuid)
    }

    async getSectionData(uuid:string){
        const data=getCache(uuid)
        return data?data:await fs.readFile(this.getSectionPath(uuid),"utf8")
    }

    //rename
    renamePart(pos:number[],name:string){
        this.beforeUpdateNovel((e)=>{
            e.content[pos[0]].name=name
        })
    }
    renameChapter(pos:number[],name:string){
        this.beforeUpdateNovel((e)=>{
            e.content[pos[0]].content[pos[1]].name=name
        })
    }
    renameSection(pos:number[],name:string){
        this.beforeUpdateNovel((e)=>{
            e.content[pos[0]].content[pos[1]].content[pos[2]].name=name
        })
    }
    //add
    addPart(pos:number[],name:string){
        this.beforeUpdateNovel(e=>{
            e.content.splice(pos[0]+1,0,new Part(name))
        })
    }

    addChapter(pos:number[],name:string){
        this.beforeUpdateNovel(e=>{
            e.content[pos[0]].content.splice(pos[1]+1,0,new Chapter(name))
        })
    }

    addSection(pos:number[],name:string){
        const uuid=v1()
        this.beforeUpdateNovel(e=>{
            e.content[pos[0]].content[pos[1]].content.splice(pos[0]+1,0,new Section(name,uuid))
        })
        fs.writeFile(this.getSectionPath(uuid),"","utf8")
    }

    saveNovel(content: Novel) {
        safeWrite(JSON.stringify(this.novelPath), content).catch(e => {
            throw new Error("saving file fail")
        })
    }

    saveMeta(content: Meta) {
        safeWrite(JSON.stringify(this.metaPath), content).catch(e => {
            throw new Error("saving file fail")
        })
    }

    updateSection(uuid: string, content: string) {
        safeWrite(this.getSectionPath(uuid), content).catch(e => {
            throw new Error("saving file fail")
        })
    }

    removeSection(uuid: string) {
        fs.unlink(this.getSectionPath(uuid))
    }
}
