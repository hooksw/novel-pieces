import {Novel, Record} from "../../../interface/project";
import * as fs from "fs-extra";
import {getAbsChapterPath, getAbsNovelDirPath, getAbsPath, novelfile, recordfile} from "../../info/storage-info";
import {initProject} from "../../../browser/utils/initProject";
import {v1} from "uuid";


const time = new Date().toLocaleDateString()
const record: Record = new Record(null, time, time)

const defaultNovel: Novel = new Novel([
    {
        name: "untitled",
        content: [{
            name: "untitled",
            uuid:v1()
        }]
    }]
)

export async function createNewNovel(name: string) {

    await fs.promises.mkdir(getAbsPath(name), {recursive: true})
    const n= fs.writeJSON(getAbsPath(name, novelfile), defaultNovel)
    const r= fs.writeJSON(getAbsPath(name, recordfile), record)
    const nd=fs.mkdir(getAbsNovelDirPath(name))

    await Promise.all([n,r,nd])

    await buildContentFromNovel(name, defaultNovel)

    await initProject(name)
}

async function buildContentFromNovel(dir: string, novel: Novel) {
    const dirs = novel.content.map(part => fs.mkdir(getAbsNovelDirPath(dir, part.name)).then(() => {
        const files=part.content.map(chapter=>fs.writeFile(getAbsChapterPath(dir,part.name,chapter.name),''))
        Promise.all(files)
    }))
    await Promise.all(dirs)
}