import {NewFile} from "./NewFile";
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


export const addChild=(pos:number[],paths:string[], name:string, title:string)=>{
    return{
        label: title,
        onClick: () => addPanel(
            <NewFile pos={pos}
                     onConfirm={e => pos.length==0?addPart(paths,name):addChapter(pos[0],paths,name)}
                     title={title}
            />
        )
    }
}
export const rename=(pos:number[],paths:string[],name:string,title:string)=>{
    return {
        label:title,
        onClick:()=>addPanel(
            <Rename pos={pos} oldName={name} onConfirm={e=>pos.length==1?renamePart(pos[0],paths,name):renameChapter(pos,paths,name)}/>
        )
    }
}
export const remove=(pos:number[],paths:string[],title:string)=>{
    return{
        label:title,
        onClick:()=>pos.length==1?removePart(pos[0],paths):removeChapter(pos,paths)
    }
}