import {NodeKey, NodeType, Outline} from "./NodeType";
import {updateAddOnData} from "../../../../lib/elec/utils/io";
import {outline$} from "./subject";
import produce from "immer";

const saveFile = (map: Outline) => updateAddOnData('outline', JSON.stringify(map))

function updateOutline(callback:(m:Outline)=>void) {
    const m=outline$.value
    const n=produce(m,i=>{
       callback(i)
    })
    outline$.next(n)
}

function changeNodeByKey(map:Outline,key:NodeKey,callback:(e:NodeType)=>void) {
    map.nodes.forEach(e=>nodeIter(e.node,key,callback))

    function nodeIter(node:NodeType,key:NodeKey,callback:(e:NodeType)=>void) {
        if(node.key==key){
            callback(node)
        }else{
            node.children.forEach(e=>nodeIter(e,key,callback))
        }
    }
}


export function changeOpenState(key:NodeKey,isOpen:boolean) {
    updateOutline(i=>{
        if(isOpen){
            let index = i.closeKeys.indexOf(key);
            if (index > -1) {
                i.closeKeys.splice(index, 1);
            }
        }else if(!isOpen&&!i.closeKeys.includes(key)){
            i.closeKeys.push(key)
        }
    })
}
export function updateNode(key: NodeKey, value: string) {
    updateOutline(i=>{
        changeNodeByKey(i,key,e=>e.value=value)
    })
}
export function moveNode(key:NodeKey,target:NodeKey,pos:'top'|'bottom'|'child') {

}
export function addNewChild(key:NodeKey) {

}
export function deleteNode(key:NodeKey) {

}