import * as fs from "fs-extra";
import {dir_project,  metaPath, novelPath} from "../storage-info";
import * as path from "path";
import {NovelListItem} from "../../types/novel";

export async function getNovelList() :Promise<NovelListItem[]>{
    let dirs = await fs.readdir(dir_project)
    const d1 = dirs.filter((v: string) =>
        (fs.statSync(path.join(dir_project, v))).isDirectory()
    ).map(async (e: string) => {
            return  {
                dir: e,
                meta: await fs.readJSON(metaPath(e))

            }
        }
    )

    return (await Promise.all(d1)).flat()
}

