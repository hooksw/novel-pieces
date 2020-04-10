import {ExpandNode} from "../../../common components/tree/ExpandNode";
import part from "../../../assests/icon/part.svg"
import * as React from "react";
import {STIcon} from "../../../common components/icons";
import {Menu} from "../../../lib/interface/MenuContext";
import {addChild, remove, rename} from "../novel-operations/common operations";

const PartMenuBuilder = (pos: number[],name:string):Menu => {
    return [
        addChild(pos,name,'add chapter'),
        rename(pos,name,'rename part'),
        remove(pos,'delete part')
    ]
}


export function PartNode(props:{
    path:string[]
    pos:number[]
    name:string
    expanded:boolean
    children?:any
}) {
    return(
        <ExpandNode menuBuilder={()=>PartMenuBuilder(props.pos,props.name)} indent={1} name={props.name} icon={<STIcon src={part}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}