import {BehaviorSubject, Subject} from "rxjs";
import {NodeKey, Outline} from "./NodeType";
import {defaultOutline} from "./defaultOutline";


export const outline$ = new BehaviorSubject<Outline>(defaultOutline)

export const curSelected$ = new Subject<string | null>()

type EditArg = {
    key: NodeKey,
    value: string,
    left: number,
    top: number,
    minWidth: number,
    height: number
}

export function setContentInput(
    key: NodeKey,
    value: string,
    left: number,
    top: number,
    minWidth: number,
    height: number):EditArg {
    return {
        key,value,left:left,top:top,minWidth,height
    }
}

export const editState$ = new Subject<EditArg | null>()