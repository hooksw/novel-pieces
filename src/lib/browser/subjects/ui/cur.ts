import {novel$} from "../project-data/novel";
import {record$} from "../project-data/record";
import {Array2} from "../../../interface/common-types";
import {map} from "rxjs/operators";
import {log} from "../../../../utils/debug";

export const curPos$=record$.pipe(
    map(e=>e.cur)
)


function getPath(pos:Array2<number>) {
    // log(pos)
    const arr:string[]=[]
    const n=novel$.value
    let t:any=n.content[pos[0]]

    arr.push(t.name)
    t=t.content[pos[1]]
    arr.push(t.name)
    // log(arr)
    return arr
}

export const curPath$=curPos$.pipe(
    map(e=>e==null?null:getPath(e))
)

