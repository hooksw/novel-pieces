import * as path from "path";

export const dir_project: string = "F:/novel-pieces"
export const path_firststart: string = `F:/first`
const name_metafile = 'meta.json'
const name_novelfile = "novel.json"
export const novelPath = (dir: string) => path.join(dir_project, dir, name_novelfile)
export const metaPath = (dir: string) => path.join(dir_project, dir, name_metafile)