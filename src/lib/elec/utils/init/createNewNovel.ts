import {v1 as uuidv1} from "uuid";
import {Meta, Novel,Record} from "../../../interface/project";
import * as fs from "fs-extra";
import {getPath, metafile, novelfile, recordfile} from "../../info/storage-info";
import {initProject} from "../../../browser/utils/initProject";

export async function createNewNovel(name: string, author: string) {
    const firstSectionUUID = uuidv1()
    const record:Record=new Record()
    const defaultNovel: Novel = new Novel([
        {
            name: "",
            content: [{
                name: "",
                content: [{
                    name: "",
                    uuid: firstSectionUUID
                }]
            }]
        }])
    const meta: Meta = {
        name: name,
        author: author,
        startTime: new Date().toDateString()
    }
    await fs.promises.mkdir(getPath(name),{ recursive: true })
    await fs.writeJSON(getPath(name,metafile), meta)
    await fs.writeJSON(getPath(name,novelfile), defaultNovel)
    await fs.writeJSON(getPath(name,recordfile), record)
    await fs.writeFile(getPath(name,firstSectionUUID), "section")
    await initProject(name)
}

