import {Array2} from "../../../../lib/interface/common";

const map=new Map<string,Array<number>>()

export function setPos(uuid:string,pos:Array2<number>){
    map.set(uuid,pos)
}
export function getPos(uuid:string) {
    return map.get(uuid)
}

export function clear(){
    map.clear()
}