import {v1 as uuidv1} from "uuid";
import {Meta, Novel} from "../../types/novel";
import * as fs from "fs-extra";
import * as path from "path";
import {dir_project, metaPath, novelPath} from "../storage-info";

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
    await fs.mkdir(path.join(dir_project, name))
    await fs.writeJSON(metaPath(name), meta)
    await fs.writeJSON(novelPath(name), defaultNovel)
    await fs.writeFile(path.join(dir_project, name, firstSectionUUID), "")
    return  name;
}

