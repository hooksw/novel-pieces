import {Novel, Record} from "../../../interface/project";
import * as fs from "fs-extra";
import {getAbsChapterPath, getAbsPath, novelfile, recordfile} from "../../info/storage-info";
import {initProject} from "../../../browser/utils/initProject";
import {from} from "rxjs";
import {tap} from "rxjs/operators";


const time = new Date().toLocaleDateString()
const record: Record = new Record(null, time, time)

const defaultNovel: Novel = new Novel([
    {
        name: "untitled",
        content: [{
            name: "untitled"
        }]
    }]
)

export async function createNewNovel(name: string) {

    await fs.promises.mkdir(getAbsPath(name), {recursive: true})
    await fs.writeJSON(getAbsPath(name, novelfile), defaultNovel)
    await fs.writeJSON(getAbsPath(name, recordfile), record)

    await buildContentFromNovel(name, defaultNovel)

    await initProject(name)
}

async function buildContentFromNovel(dir: string, novel: Novel) {
    const dirs = novel.content.map(part => fs.mkdir(getAbsPath(dir, part.name)).then(() => {
        const files=part.content.map(chapter=>fs.writeFile(getAbsChapterPath(dir,part.name,chapter.name),''))
        Promise.all(files)
    }))
    await Promise.all(dirs)
}