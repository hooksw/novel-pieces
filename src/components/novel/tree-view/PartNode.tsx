import {ExpandNode} from "../../../common components/tree/ExpandNode";
import part from "../../../assests/icon/part.svg"
import * as React from "react";
import {STIcon} from "../../../common components/icons";
import {Menu} from "../../../lib/interface/MenuContext";
import {
    addChapterPanel,
    removePartPanel,
    renamePartPanel
} from "../novel-operations/common operations";

const partMenuBuilder = (pos: number,name:string):Menu => {
    return [
        addChapterPanel([pos],name,'add chapter'),
        renamePartPanel(pos,name,'rename part'),
        removePartPanel(pos,name,'delete part')
    ]
}


export function PartNode(props:{
    pos:number
    name:string
    expanded:boolean
    children?:any
}) {
    return(
        <ExpandNode
            menuBuilder={()=>partMenuBuilder(props.pos,props.name)}
            indent={1} name={props.name} icon={<STIcon src={part}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}