import {BehaviorSubject} from "rxjs";
import {IO} from "../../../elec/utils/io";
import produce from "immer";
import {Chapter, Novel, Part} from "../../../interface/project";
import {chapterCache} from "../../utils/chapter-cache";
import {record$, updateCur} from "./record";
import {shouldUpdate} from "./shouldUpdate";
import {Array0or1, Array1or2, Array2} from "../../../interface/common-types";
import {log} from "../../../../utils/debug";
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
    adjustCurPos([pos])
}


//chapter
export  async function getChapter(part:string,chapter:string):Promise<string> {
    let data = chapterCache.getCache(part,chapter)
    log(data,'cache data')
    if(!data) {
        data=await IO._getChapter(part,chapter)
        chapterCache.updateCache(part,chapter,data)
    }
    return data
}

export function addChapter(pos:number,part:string,chapter:string) {
    IO._addChapter(part,chapter)

    novelUpdate(e => {
        e.content[pos].content.push(new Chapter(chapter,v1()))
    })
}
export function renameChapter(pos:Array2<number>,oldPath:Array2<string>,newName:string) {
    const newPath=produce(oldPath,i=>{
        i[1]=newName
    })
    IO._renameChapter(oldPath,newPath)

    novelUpdate(e=>{
        e.content[pos[0]].content[pos[1]].name=newName
    })
}

export function removeChapter(pos:Array2<number>,part:string,chapter:string) {
    IO._removeChapter(part, chapter)

    novelUpdate(e => {
        e.content[pos[0]].content.splice(pos[1], 1)
    })

    adjustCurPos(pos)

    chapterCache.deleteCache(part,chapter)
}

export function updateChapter(part:string,chapter:string,content:string) {
    chapterCache.updateCache(part,chapter,content)

    IO._updateChapter(part, chapter, content)
}

export function checkNameExist(parent:Array0or1<number>, name: string) {
    // const parent=pos.slice(0,-1)
    const n=novel$.value
    if(parent.length==0){
        return n.content.some((e) => e.name == name)
    }else{
        return n.content[parent[0]].content.some(e=>e.name==name)
    }
}



function adjustCurPos(pos:Array1or2<number>) {
    const curPos = record$.value.cur
    if(curPos==null) return

    const ifMatch =  pos.every((v, i) => curPos[i] == v)

    if(pos.length==2){
        if(ifMatch){
            updateCur(null)
        }else if(pos[1]<curPos[1]){
            const newPos=produce(curPos,i=>{
                i[1]-=1
            })
            updateCur(newPos)
        }
    }else if(pos.length==1){
        if(ifMatch){
            updateCur(null)
        }
    }

}

