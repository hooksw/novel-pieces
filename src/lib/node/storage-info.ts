import * as path from "path";

export const dir_store: string = "F:/p"
export const path_firststart: string = `F:/first`
export const metafile = 'meta.json'
export const novelfile = "novel.json"
export const recordfile = "record.json"
export const getPath=(dir:string,file:string='')=>path.join(dir_store,dir,file)