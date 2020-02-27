import * as path from "path";

export const dir_project: string = "F:/novel-pieces"
export const path_firststart: string = `F:/first`
export const metafile = 'meta.json'
export const novelfile = "novel.json"
export const getPath=(dir:string,file:string=null)=>path.join(dir_project,dir,file)