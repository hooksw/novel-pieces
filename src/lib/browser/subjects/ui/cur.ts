import {Subject} from "rxjs";
import {map} from "rxjs/operators";
import {novel$} from "../project-data/novel";

export const curPos$=new Subject<number[]|null>()


function getPath(pos:number[]) {
    const arr:string[]=[]
    const n=novel$.value
    let t:any=n.content[pos[0]]
    arr.push(t.name)
    t=t.content[pos[1]].name
    arr.push(t.name)
    return arr
}
export const curPath$=new Subject<string[]|null>()
curPos$.subscribe(e=>curPath$.next(e==null?null:getPath(e)))