import {BehaviorSubject} from "rxjs";
import produce from "immer";

export const unMountEvents$=new BehaviorSubject<Array<(e:string)=>void>>([])

export const changeEvents$=new BehaviorSubject<Array<(e:string)=>void>>([])

export function addEvent(type:'unMount'|'change',listener:Function) {
    let subject:BehaviorSubject<Array<Function>>|undefined=undefined

    switch (type) {
        case "unMount":subject=unMountEvents$
            break
        case "change":subject=changeEvents$
            break
    }
    if(subject){
        const n=produce(subject.value,i=>{
            i.push(listener)
        })
        subject.next(n)
    }
}