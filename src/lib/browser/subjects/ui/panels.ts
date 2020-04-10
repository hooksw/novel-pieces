import {BehaviorSubject} from "rxjs";
import produce from "immer";

export const panels=new BehaviorSubject<JSX.Element[]|null>(null)

export function closeCurPanel() {
    const cur=panels.getValue()
    if(cur!=null&&cur.length>0){
        const now=produce(cur,i=>{
            i.pop()
        })
        panels.next(now)
    }
}
export function addPanel(e:JSX.Element){
    const cur=panels.getValue()
    if(cur!=null){
        const now=produce(cur,i=>{
            i.push(e)
        })
        panels.next(now)
    }
}