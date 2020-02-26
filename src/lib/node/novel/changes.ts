import * as fs from "fs-extra";
import * as path from "path";
import {dir_project} from "../storage-info";
import {Novel} from "../../types/novel";



export function saveSctionContent(dir:string,uuid:string,content:string) {
    fs.writeFile(path.join(dir_project,dir,uuid),content,"utf8").catch(e=>{

    })
}
export function rename(pos:number[],name:string) {

}
