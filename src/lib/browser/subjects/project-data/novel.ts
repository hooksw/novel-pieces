import {BehaviorSubject} from "rxjs";
import {IO} from "../../../elec/utils/io";
import produce from "immer";
import {Chapter, Novel, Part} from "../../../interface/project";
import {sectionCache} from "../../utils/section-cache";
import {record$, updateCur} from "./record";


export const novel$ = new BehaviorSubject<Novel>(new Novel())

novel$.subscribe(next => {
    IO._updateNovel(next)
})


function novelUpdate(callback: (novel: Novel) => void) {
    const value = novel$.value;
    const newValue = produce(value, i => {
        callback(value)
    })
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

const getRenamedPath=(paths:string[],newName:string)=>produce(paths, i => {
    i[i.length - 1] = newName
})

export function renamePart(pos:number,oldPath: string[], newName: string) {
    const newPath: string[] = getRenamedPath(oldPath,newName)
    IO._renamePart(oldPath, newPath)

    novelUpdate(e=>{
            e.content[pos].name=newName

    })
}

export function renameChapter(pos:number[],oldPath:string[],newName:string) {
    const newPath: string[] = getRenamedPath(oldPath,newName)
    IO._renameChapter(oldPath,newPath)

    novelUpdate(e=>{
        e.content[pos[0]].content[pos[1]].name=newName
    })
}
export function addPart(paths: string[], childName: string) {
    const newPath = produce(paths, i => {
        i.push(childName)
    })
    IO._addPart(newPath)

    novelUpdate(e => {
        e.content.push(new Part(childName))
    })
}

export function addChapter(pos:number,paths: string[], childName: string) {
    IO._addChapter(paths)

    novelUpdate(e => {
        e.content[pos].content.push(new Chapter(childName))
    })
}


export function removeChapter(pos:number[],paths: string[]) {
    IO._removeChapter(paths)

    novelUpdate(e => {
        e.content[pos[0]].content.splice(pos[1], 1)
    })
}
export function removePart(pos:number,paths:string[]) {
    IO._removePart(paths)

    novelUpdate(e=>{
        e.content.splice(pos, 1)
    })
}

export function checkChildrenNameExist(pos:number, name: string,ChildType:'chapter'|'part') {
    const n=novel$.value
    if(ChildType=="part"){
        return n.content.some((e) => e.name == name)
    }else{
        return n.content[pos].content.some(e=>e.name==name)
    }
}


export  async function getChapter(paths:string[]) {
    const data = sectionCache.getCache(paths.join('/'))
    return data ? data : await IO._getChapter(paths)
}

export function deleteNonSection(clickPos: number[]) {
    const curPos = record$.value.cur
    const ifMatch = curPos != null && clickPos.every((v, i) => curPos[i] == v)

    if (ifMatch) {
        updateCur(null)
    }

}

