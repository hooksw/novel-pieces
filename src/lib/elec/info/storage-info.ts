import * as path from "path";
import produce from "immer";

export const dir_projects: string = "F:/p"
export const path_firststart: string = `F:/first`
export const novelfile = "novel.json"
export const recordfile = "record.json"
export const getAbsPath=(...paths:string[])=>path.join(dir_projects,...paths)
export const getAbsChapterPath=(dir:string, ...paths:string[])=>{
    const p=produce(paths,i=>{
        i[i.length-1]+='.txt'
    })
    return path.join(dir_projects,dir,...p)
}