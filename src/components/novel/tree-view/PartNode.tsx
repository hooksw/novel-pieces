import {ExpandNode} from "../../common/tree/ExpandNode";
import part from "../../../assests/icon/part.svg"
import * as React from "react";
import {SIcon} from "../../common/icons";

export function PartNode(props:{
    depth:Array<number>
    name:string
    expanded:boolean
    children?:any
}) {
    return(
        <ExpandNode indent={0} name={props.name} icon={<SIcon src={part}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}