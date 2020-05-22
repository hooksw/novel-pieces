import {BehaviorSubject, Subject} from "rxjs";
import {MsgProps} from "../../../lib/interface/msg";
import produce from "immer";

export const newMsgItem$=new Subject<MsgProps>()

export const msgList$=new BehaviorSubject<MsgProps[]>([])

function addMsg(e:MsgProps){
    const ml=msgList$.value
    const newMl=produce(ml,i=>{
        i.push(e)
    })
    msgList$.next(newMl)
}

newMsgItem$.subscribe(n=>{
    addMsg(n)
})