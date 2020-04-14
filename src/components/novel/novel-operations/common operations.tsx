import {NewChild} from "./NewChild";
import * as React from "react";
import {addPanel} from "../../../lib/browser/subjects/ui/panels";
import {Rename} from "./Rename";
import {
    addChapter,
    addPart,
    removeChapter, removePart,
    renameChapter,
    renamePart
} from "../../../lib/browser/subjects/project-data/novel";
import {Array0or1, Array1, Array1or2, Array2} from "../../../lib/interface/common-types";

export type Confirm=(name:string)=>void

const addChild=(pos:Array0or1<number>, nodeName:string, panelTitle:string,onConfirm:Confirm)=>{
    return{
        label: panelTitle,
        onClick: () => addPanel(<NewChild parent={pos} onConfirm={onConfirm} title={panelTitle}/>)
    }
}
export const addPartPanel=(part:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>addPart(newName)
    return addChild([],part,panelTitle,onConfirm)
}
export const addChapterPanel=(pos:Array1<number>, part:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>addChapter(pos[0],part,newName)
    return addChild(pos,part,panelTitle,onConfirm)
}

const rename=(pos:Array1or2<number>,name:string,title:string,onConfirm:Confirm)=>{
    return {
        label:title,
        onClick:()=>addPanel(
            <Rename  pos={pos} oldName={name} onConfirm={onConfirm} title={title}/>
        )
    }
}
export const renamePartPanel=(pos:number,partName:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>renamePart(pos, partName, newName)
    return rename([pos],partName,panelTitle,onConfirm)
}
export const renameChapterPanel=(pos:Array2<number>, path:Array2<string>,chapterName:string, panelTitle:string)=>{
    const onConfirm:Confirm=newName=>renameChapter(pos,path,newName)
    return rename(pos,chapterName,panelTitle,onConfirm)
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
export const removeChapterPanel=(pos:Array2<number>,part:string,chapter:string,title:string)=>remove(title,()=>{
    removeChapter(pos,part,chapter)
})