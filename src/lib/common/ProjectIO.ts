
import { novelfile, metafile, getPath} from "../node/storage-info";
import {safeWrite} from "../node/safeWrite";


export let projectIO: ProjectIO=null

export function setProjectIO(e:ProjectIO) {
    projectIO=e
}

export class ProjectIO{
    private readonly projectDir:string
    constructor(dir:string) {
        this.projectDir=dir
    }
    getPath=(file:string=null)=>getPath(this.projectDir,file)
    novelPath=this.getPath(novelfile)
    metaPath=this.getPath(metafile)
    projectPath=this.getPath()

    getSectionPath(uuid:string){
        return this.getPath(uuid)
    }

    saveNovel(content:string) {
        safeWrite(this.novelPath,content).catch(e=>{
            throw new Error("saving file fail")
        })
    }
    saveSection(uuid:string,content:string){
        safeWrite(this.getSectionPath(uuid),content).catch(e=>{
            throw new Error("saving file fail")
        })
    }
}
