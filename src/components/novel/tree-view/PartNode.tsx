import {ExpandNode} from "../../common/tree/ExpandNode";
import part from "../../../assests/icon/part.svg"
import * as React from "react";
import {STIcon} from "../../common/icons";

export function PartNode(props:{
    pos:Array<number>
    name:string
    expanded:boolean
    children?:any
}) {
    return(
        <ExpandNode menuBuilder={null} indent={0} name={props.name} icon={<STIcon src={part}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}