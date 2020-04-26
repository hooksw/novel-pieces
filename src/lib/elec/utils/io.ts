import * as fs from "fs-extra";
import {Novel, Record} from "../../interface/project";
import {safeWrite} from "./safeWrite";
import {getAbsChapterPath, getAbsNovelDirPath, getAbsPath, novelfile, recordfile} from "../info/storage-info";
import {BehaviorSubject} from "rxjs";
import {Array2} from "../../interface/common-types";
import {log} from "../../../utils/debug";

export const rootName$ = new BehaviorSubject('')


const getPath = (...relativePath: string[]) => getAbsPath(rootName$.value, ...relativePath)
const getNovelDir = (...relativePath: string[]) => getAbsNovelDirPath(rootName$.value, ...relativePath)
const getChapterPath = (...paths: string[]) => getAbsChapterPath(rootName$.value, ...paths)
export namespace IO {


//part
    export function _addPart(part: string) {
        fs.mkdir(getNovelDir(part))
    }

    export function _renamePart(oldPart: string, newPart: string) {
        fs.rename(getNovelDir(oldPart),
            getNovelDir(newPart))
    }

    export function _removePart(part: string) {
        fs.rmdir(getNovelDir(part))
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

export function updateAddOnData(name:string,JSONContent:string) {
    const p=getPath(name+'.json')
    safeWrite(p,JSONContent).catch(e=>{
        console.log(e)
    })
}