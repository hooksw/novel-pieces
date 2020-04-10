import * as fs from "fs-extra";
import {Novel, Record} from "../../interface/project";
import {safeWrite} from "./safeWrite";
import * as path from "path";
import {novelfile, recordfile} from "../info/storage-info";
import produce from "immer";

let rootDir: string = ''

export const setCurDir = (d: string) => rootDir = d

const getPath = (...relativePath: string[]) => path.join(rootDir, ...relativePath)

export namespace IO {

    export async function _getChapter(paths: string[]) {
        const r = await fs.readFile(getPath(...paths), "utf8")
        console.log('io:' + r)
        return r
    }

//novel dir tree operations
    export function _addPart(paths: string[]) {
            fs.mkdir(getPath(...paths))
    }

    const getChapterWithExt=(paths:string[])=> produce(paths,i=>{
            i[i.length-1]+='.txt'
        })

    export function _addChapter(paths:string[]){
        const chapter=getChapterWithExt(paths)
        fs.writeFile(getPath(...chapter), "", "utf8")
    }
    export function _renameChapter(oldPath: string[], newPath: string[]) {
        const oldChapter=getChapterWithExt(oldPath)
        const newChapter=getChapterWithExt(newPath)
        fs.rename(getPath(...oldChapter),
            getPath(...newChapter))
    }

    export function _renamePart(oldPath: string[], newPath: string[]) {
        fs.rename(getPath(...oldPath),
            getPath(...newPath))
    }

    export function _removePart(paths: string[]) {
            fs.rmdir(getPath(...paths))
    }
    export function _removeChapter(paths:string[]) {
        const chapter=getChapterWithExt(paths)
        fs.unlink(getPath(...chapter))
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

    export function _updateChapter(paths: string[], content: string) {
        const chapterPath=getPath(...paths)
        safeWrite(chapterPath, content).catch(e => {
            throw new Error("saving file fail")
        })
    }
}