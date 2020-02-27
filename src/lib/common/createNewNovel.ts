import {v1 as uuidv1} from "uuid";
import {Meta, Novel} from "../types/novel";
import * as fs from "fs-extra";
import {ProjectIO, projectIO, setProjectIO} from "./ProjectIO";
import {dir_project, getPath, metafile, novelfile} from "../node/storage-info";
import * as path from "path";
import {initWorkbench} from "../browser/initWorkBench";

export async function createNewNovel(name: string, author: string) {
    const firstSectionUUID = uuidv1()
    const defaultNovel: Novel = {
        cur:[0,0,0],
        content:[
            {
                name: "",
                content: [{
                    name: "",
                    content: [{
                        name: "",
                        uuid: firstSectionUUID
                    }]
                }]
            }]
    }
    const meta: Meta = {
        name: name,
        author: author,
        startTime: new Date().toDateString(),
        lastUpdateTime: this.startTime
    }
    await fs.mkdir(getPath(name))
    await fs.writeJSON(getPath(name,metafile), meta)
    await fs.writeJSON(getPath(name,novelfile), defaultNovel)
    await fs.writeFile(getPath(name,firstSectionUUID), "")
    await new Promise(()=>initWorkbench(name))
}

