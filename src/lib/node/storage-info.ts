import * as path from "path";

export const dir_project: string = "F:/novel-pieces"
export const path_firststart: string = `F:/first`
const name_metafile = 'meta.json'
const name_novelfile = "novel.json"
export const projectPath=(dir:string,file:string=null)=>path.join(dir_project, dir,file)
export const novelPath = (dir: string) => projectPath(dir,name_novelfile)
export const metaPath = (dir: string) => projectPath(dir,name_metafile)
export const sectionPath=(dir:string,uuid:string)=>projectPath(dir,uuid)