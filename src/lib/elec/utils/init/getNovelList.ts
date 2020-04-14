import * as fs from "fs-extra";
import {dir_projects, getAbsPath, recordfile} from "../../info/storage-info";
import * as path from "path";
import {NovelListItem} from "../../../interface/ui";
import {Record} from "../../../interface/project";

export async function getNovelList(): Promise<NovelListItem[]> {
    let dirs = await fs.readdir(dir_projects)
    const d1 = dirs.filter((v: string) =>
        (fs.statSync(path.join(dir_projects, v))).isDirectory()
    ).map(async (e: string) => {
        const record:Record=await fs.readJSON(getAbsPath(e, recordfile))
            const r: NovelListItem = {
                dir: e,
                lastUpdateTime:  record.lastUpdateTime

            }
            return r
        }
    )

    return (await Promise.all(d1)).flat()
}

