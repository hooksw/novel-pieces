import * as fs from "fs-extra";
import {dir_project, novelPath} from "../storage-info";
import {Novel} from "../../types/novel";
import {safeWrite} from "../safeWrite";



export function saveContent(path:string,content:string) {
    safeWrite(path,content).catch(e=>{
        throw new Error("saving file fail")
    })
}