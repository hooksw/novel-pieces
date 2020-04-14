import * as fs from "fs-extra";
import {Novel, Record} from "../../interface/project";
import {safeWrite} from "./safeWrite";
import {getAbsChapterPath, getAbsPath, novelfile, recordfile} from "../info/storage-info";
import {BehaviorSubject} from "rxjs";
import {Array2} from "../../interface/common-types";
import {log} from "../../../utils/debug";

export const rootName$ = new BehaviorSubject('')


const getPath = (...relativePath: string[]) => getAbsPath(rootName$.value, ...relativePath)
const getChapterPath = (...paths: string[]) => getAbsChapterPath(rootName$.value, ...paths)
export namespace IO {


//part
    export function _addPart(part: string) {
        fs.mkdir(getPath(part))
    }

    export function _renamePart(oldPart: string, newPart: string) {
        fs.rename(getPath(oldPart),
            getPath(newPart))
    }

    export function _removePart(part: string) {
        fs.rmdir(getPath(part))
    }


    //chapter
    export async function _getChapter(part:string,chapter:string) {
        const r=  await fs.readFile(getChapterPath(part,chapter), "utf8")
        log(r,'io getChapter')
        return r
    }

    export function _addChapter(part: string, chapter: string) {
        const p = getChapterPath(part, chapter)
        fs.writeFile(p, "", "utf8")
    }

    export function _renameChapter(oldPath: Array2<string>, newPath: Array2<string>) {
        const oldChapter = getChapterPath(...oldPath)
        const newChapter = getChapterPath(...newPath)
        fs.rename(oldChapter, newChapter)
    }

    export function _removeChapter(part: string, chapter: string) {
        const p = getChapterPath(part,chapter)
        fs.unlink(p)
    }


//update file

    export function _updateNovel(content: Novel) {
        const novelPath = getPath(novelfile)
        console.log(novelPath)
        safeWrite(novelPath, JSON.stringify(content)).catch(e => {
            throw new Error("saving file fail:" + e)
        })
    }

    export function _updateRecord(content: Record) {
        const recordPath = getPath(recordfile)
        safeWrite(recordPath, JSON.stringify(content)).catch(e => {
            throw new Error("saving file fail")
        })
    }

    export function _updateChapter(part: string, chapter: string, content: string) {
        const p = getChapterPath(part,chapter)
        safeWrite(p, content).catch(e => {
            throw new Error("saving file fail")
        })
    }
}