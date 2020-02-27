import * as fs from "fs-extra";
import * as path from "path";
import {dir_project, novelPath} from "../storage-info";
import {Novel} from "../../types/novel";
import {safeWrite} from "../safeWrite";



export function saveSectionContent(dir:string,uuid:string,content:string) {
    safeWrite(path.join(dir_project,dir,uuid),content)
}
function novelFileChange(dir:string,curNovel:Novel) {
    const p=novelPath(dir)
    const data=JSON.parse(fs.readJSONSync(p))
    safeWrite(p,JSON.stringify(curNovel))
}