import {getAbsPath, novelfile, recordfile} from "../../info/storage-info";
import * as fs from "fs-extra"
import {initALl} from "../../../interface/project";


export async function getProject(dir: string) {

    const novelPath = getAbsPath(dir,novelfile)

    const recordPath = getAbsPath(dir,recordfile)
    const r: initALl = {

        novel: await fs.readJSON(novelPath),
        record: await fs.readJSON(recordPath),


    }
    return r
}