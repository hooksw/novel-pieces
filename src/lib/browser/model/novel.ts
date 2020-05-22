import {BehaviorSubject} from "rxjs";
import {IO} from "../../elec/utils/io";
import produce from "immer";
import {Chapter, Novel, Part} from "../../interface/project";
import {chapterCache} from "../utils/chapter-cache";
import {shouldUpdate} from "./shouldUpdate";
import {Array2} from "../../interface/common";
import {log} from "../../../utils/debug";
import {v1} from "uuid";


export const novel$ = new BehaviorSubject<Novel>(new Novel())

novel$.subscribe(next => {
    if(shouldUpdate){
        IO._updateNovel(next)
    }
})


function novelUpdate(callback: (novel: Novel) => void) {
    const value = novel$.value;
    const newValue = produce(value, i => {
        callback(i)
    })
    log(value==newValue,'novel check')
    novel$.next(newValue)
}

// const getPaths=(pos:number[])=>{
//     const arr:string[]=[]
//     let n:any=novel$.value
//     for(let i=0;i<pos.length;i++){
//         n=n.content[pos[i]]
//         const name=n.name
//         arr.push(name)
//     }
//     console.log('getPath:'+arr)
//     return arr
// }



//part
export function addPart(childName: string) {
    IO._addPart(childName)

    novelUpdate(e => {
        e.content.push(new Part(childName))
    })
}
export function renamePart(pos:number,oldName: string, newName: string) {
    IO._renamePart(oldName, newName)

    novelUpdate(e=>{
            e.content[pos].name=newName
    })
}
export function removePart(pos:number,name:string) {
    IO._removePart(name)

    novelUpdate(e=>{
        e.content.splice(pos, 1)
    })
}


//chapter
export  async function getChapter(uuid:string):Promise<string> {
    let data = chapterCache.getCache(uuid)
    log(data,'cache data')
    if(data===undefined) {
        const [part,chapter]=getPathFromUUID(uuid)
        data=await IO._getChapter(part,chapter)
        chapterCache.updateCache(uuid,data)
    }
    return data
}

export function addChapter(pos:number,part:string,chapter:string) {
    IO._addChapter(part,chapter)

    novelUpdate(e => {
        e.content[pos].content.push(new Chapter(chapter,v1()))
    })
}
export function renameChapter(parent:number,self:number,newName:string) {
    const oldPath=getChapterPathFromPos(parent,self)
    const newPath=[oldPath[0],newName] as Array2<string>

    IO._renameChapter(oldPath,newPath)

    novelUpdate(e=>{
        e.content[parent].content[self].name=newName
    })
}

export function removeChapter(parent:number,self:number) {
    IO._removeChapter(...getChapterPathFromPos(parent,self))
    chapterCache.deleteCache(getUUIDFromPos(parent,self))

    novelUpdate(e => {
        e.content[parent].content.splice(self, 1)
    })
}

export function updateChapter(uuid:string,content:string) {
    chapterCache.updateCache(uuid,content)

    const [part,chapter]=getPathFromUUID(uuid)
    IO._updateChapter(part, chapter, content)
}

export function checkNameExist(parent:number|undefined, name: string) {
    // const parent=pos.slice(0,-1)
    const n=novel$.value
    if(parent==undefined){
        return n.content.some((e) => e.name == name)
    }else{
        return n.content[parent].content.some(e=>e.name==name)
    }
}



function getChapterPathFromPos(parent:number,self:number):Array2<string> {
    const p=novel$.value.content[parent]
    const s=p.content[self]

    return [p.name,s.name]
}

function getPathFromUUID(uuid: string): Array2<string> {
    let a: Array2<string> | null = null
    novel$.value.content.forEach(part => {
        part.content.forEach(chapter => {
            if (chapter.uuid == uuid)
                a = [part.name, chapter.name]
        })
    })
    if (a==null) throw 'getPathFromUUID null'

    return a
}

export function getUUIDFromPos(parent:number,self:number) {
    return novel$.value.content[parent].content[self].uuid
}

export function getPosFromUUID(uuid:string|null){
    if(uuid==null) return null

    let a: Array2<number> | null = null
    novel$.value.content.forEach((part,i0) => {
        part.content.forEach((chapter,i1) => {
            if (chapter.uuid == uuid)
                a = [i0, i1]
        })
    })
    if (a==null) throw 'getPathFromUUID null'

    return a
}
