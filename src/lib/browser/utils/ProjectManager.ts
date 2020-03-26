import {projectIO} from "../../common/ProjectIO";
import {Chapter, Novel, Part, Project, Record, Section} from "../../types/project";
import {sectionCache} from "../section-cache";
import v1 = require("uuid/v1");
import {mProject} from "../../../components/workbench/ProjectContainer";

class RecordManager {
    record:Record

    constructor(project:Project) {
        this.record=project.record
    }
    beforeUpdate(callback:(e: Record) => void){
        callback(this.record)
        projectIO.saveRecord(this.record)
    }
    updateCur(cur:number[]){
        this.beforeUpdate(e=>{
            e.cur=cur
        })
    }
    updateLastTime(){
        this.beforeUpdate(e=>{
            e.lastUpdateTime=new Date().toLocaleDateString()
        })
    }
}

class NovelManager {
    novel: Novel

    findSection=(novel: Novel,cur: number[] ):Section => novel.content[cur[0]].content[cur[1]].content[cur[2]]

    constructor(project: Project) {
        this.novel = project.novel
    }

    beforeUpdate(callback: (e: Novel) => void) {
        callback(this.novel)
        projectIO.saveNovel(this.novel)

        mProject.set( (pre:Project) => {
            pre.novel=this.novel
            return projectCopy(pre)
        })
    }

    checkNameExist(pos:number[],name:string){
        let m:Chapter|Part|Novel=this.novel
        for(let i=0;i<pos.length-1;i++){
            m=m.content[pos[i]]
        }
        console.log(JSON.stringify(m))
        return m.content.some((e: { name: string; })=>e.name==name)
    }

    async getSection(uuid: string) {
        const data = sectionCache.getCache(uuid)
        return data ? data : await projectIO.getSection(uuid)
    }

    renamePart(pos: number[], name: string) {
        this.beforeUpdate((e) => {
            e.content[pos[0]].name = name
        })
    }

    renameChapter(pos: number[], name: string) {
        this.beforeUpdate((e) => {
            e.content[pos[0]].content[pos[1]].name = name
        })
    }

    renameSection(pos: number[], name: string) {
        this.beforeUpdate((e) => {
            e.content[pos[0]].content[pos[1]].content[pos[2]].name = name
        })
    }

    addPart(pos: number[], name: string) {
        this.beforeUpdate(e => {
            e.content.splice(pos[0] + 1, 0, new Part(name))
        })
    }

    addChapter(pos: number[], name: string) {
        this.beforeUpdate(e => {
            e.content[pos[0]].content.splice(pos[1] + 1, 0, new Chapter(name))
        })
    }

    addSection(pos: number[], name: string) {
        const uuid = v1()
        this.beforeUpdate(e => {
            e.content[pos[0]].content[pos[1]].content.splice(pos[0] + 1, 0, new Section(name, uuid))
        })
        projectIO.addSection(uuid)
    }

    updateSection(uuid: string, content: string) {
        sectionCache.updateCache(uuid, content)
        projectIO.updateSection(uuid, content)
    }

    removeSection(pos: number[], uuid: string) {
        this.beforeUpdate(e => {
            e.content[pos[0]].content[pos[1]].content.splice(pos[2], 1)
        })
        sectionCache.deleteCache(uuid)
        projectIO.removeSection(uuid)
    }
}

class ProjectManager {
    project: Project
    novel: NovelManager
    record:RecordManager

    async init(dir: string) {
        this.project = await projectIO.initProject(dir)
        this.novel = new NovelManager(this.project)
        this.record=new RecordManager(this.project)
    }


}

function projectCopy(p:Project) {
    return Object.assign({},p)
}

export const projectManager = new ProjectManager()