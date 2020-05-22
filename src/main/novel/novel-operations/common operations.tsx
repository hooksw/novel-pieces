import {NewChild} from "./NewChild";
import * as React from "react";
import {addPanel} from "../../over-interface/model/panels";
import {Rename} from "./Rename";
import {
    addChapter,
    addPart, checkNameExist,
    removeChapter,
    removePart,
    renameChapter,
    renamePart
} from "../../../lib/browser/model/novel";
import {Array1or2, Array2} from "../../../lib/interface/common";

export type Confirm=(name:string)=>void

const addChild=(parent:number|undefined, panelTitle:string,onConfirm:Confirm)=>{
    return{
        label: panelTitle,
        onClick: () => addPanel(<NewChild parent={parent} onConfirm={onConfirm} title={panelTitle}/>)
    }
}
export const addPartPanel=(part:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>addPart(newName)
    return addChild(undefined,panelTitle,onConfirm)
}
export const addChapterPanel=(parent:number, part:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>addChapter(parent,part,newName)
    return addChild(parent,panelTitle,onConfirm)
}

const rename=(parent:number|undefined,name:string,title:string,onConfirm:Confirm)=>{
    return {
        label:title,
        onClick:()=>addPanel(
            <Rename  parent={parent}  oldName={name} onConfirm={onConfirm} title={title}/>
        )
    }
}
export const renamePartPanel=(pos:number,partName:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>renamePart(pos, partName, newName)
    return rename(undefined,partName,panelTitle,onConfirm)
}
export const renameChapterPanel=(parent:number,self:number,chapterName:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>renameChapter(parent,self,newName)
    return rename(parent,chapterName,panelTitle,onConfirm)
}

const remove=(title:string,onConfirm:()=>void)=>{
    return{
        label:title,
        onClick:onConfirm
    }
}
export const removePartPanel=(pos:number,partName:string,title:string)=>remove(title,()=>{
    removePart(pos,partName)
})
export const removeChapterPanel=(parent:number,self:number,title:string)=>remove(title,()=>{
    removeChapter(parent,self)
})