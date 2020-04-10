import * as fs from "fs-extra";
import {dir_store, getPath, metafile} from "../../info/storage-info";
import * as path from "path";
import {NovelListItem} from "../../../interface/project";

export async function getNovelList() :Promise<NovelListItem[]>{
    let dirs = await fs.readdir(dir_store)
    const d1 = dirs.filter((v: string) =>
        (fs.statSync(path.join(dir_store, v))).isDirectory()
    ).map(async (e: string) => {
            return  {
                dir: e,
                meta: await fs.readJSON(getPath(e,metafile))

            }
        }
    )

    return (await Promise.all(d1)).flat()
}

