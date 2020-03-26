import {getPath, metafile, novelfile, recordfile} from "../node/storage-info";
import {safeWrite} from "../node/safeWrite";
import * as fs from "fs-extra"
import {Meta, Novel, Project, Record} from "../types/project";


class ProjectIO {
    private projectDir: string
    novelPath: string
    metaPath: string
    recordPath: string


    async initProject(dir:string) {
        this.projectDir = dir
        this.novelPath = this.getPath(novelfile)
        this.metaPath = this.getPath(metafile)
        this.recordPath = this.getPath(recordfile)
        return new Project(
            await fs.readJSON(this.metaPath),
            await fs.readJSON(this.novelPath),
            await fs.readJSON(this.recordPath)
        )
    }


    getPath(file: string) {
        return getPath(this.projectDir, file)
    }


    getSectionPath(uuid: string) {
        return this.getPath(uuid)
    }

    async getSection(uuid: string) {
        return await fs.readFile(this.getSectionPath(uuid), "utf8")
    }
    addSection(uuid: string) {
        fs.writeFile(this.getSectionPath(uuid), "", "utf8")
    }

    saveNovel(content: Novel) {
        console.log(this.novelPath)
        safeWrite(this.novelPath, JSON.stringify(content)).catch(e => {
            throw new Error("saving file fail:"+e)
        })
    }

    saveRecord(content:Record){
        safeWrite(this.recordPath, JSON.stringify(content)).catch(e => {
            throw new Error("saving file fail")
        })
    }

    saveMeta(content: Meta) {
        safeWrite(this.metaPath, JSON.stringify(content)).catch(e => {
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
export let projectIO: ProjectIO = new ProjectIO()
