import {getPath, metafile, novelfile} from "../node/storage-info";
import {safeWrite} from "../node/safeWrite";


export let projectIO: ProjectIO = null

export function setProjectIO(e: ProjectIO) {
    projectIO = e
}

export class ProjectIO {
    private readonly projectDir: string
    readonly novelPath:string
    readonly metaPath:string
    constructor(dir: string) {
        this.projectDir = dir
        this.novelPath = this.getPath(novelfile)
        this.metaPath = this.getPath(metafile)
    }

    getPath(file: string) {
        console.log("getpathruned:"+this.projectDir)
        return getPath(this.projectDir, file)
    }


    getSectionPath(uuid: string) {
        return this.getPath(uuid)
    }

    saveNovel(content: string) {
        safeWrite(this.novelPath, content).catch(e => {
            throw new Error("saving file fail")
        })
    }

    saveSection(uuid: string, content: string) {
        safeWrite(this.getSectionPath(uuid), content).catch(e => {
            throw new Error("saving file fail")
        })
    }
}
