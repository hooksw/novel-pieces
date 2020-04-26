import {BehaviorSubject, Subject} from "rxjs";
import {MindMap, NodeKeyType} from "../../../lib/interface/outline/NodeType";

export const mindMap$=new BehaviorSubject<MindMap>([])

export function updateMindMap(nodeKsy:NodeKeyType,value:string) {
    const m=mindMap$.value
    m.forEach(v=>{

    })
}

export const curSelected$=new Subject<NodeKeyType|null>()

export type EditArg={
    nodeKey:NodeKeyType,
    value:string,
    left:number,
    top:number,
    minWidth:number,
    height:number
}
export const editState$=new Subject<EditArg|null>()