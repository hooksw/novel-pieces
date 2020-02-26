import {Project} from "../../types/novel";
import * as fs from "fs-extra";
import {metaPath, novelPath} from "../storage-info";

export async function getProject(dir:string) {
    const p:Project={
        meta:await fs.readJSON(metaPath(dir)),
        novel:await fs.readJSON(novelPath(dir))
    }
    return p
}