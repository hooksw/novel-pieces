import {ExpandNode} from "../../common/tree/ExpandNode";
import chapter from "../../../assests/icon/chapter.svg"
import * as React from "react";
import {SIcon} from "../../common/icons";

export function ChapterNode(props:{
    depth:Array<number>
    children?:any
    name:string
    expanded:boolean
}) {
    return(
        <ExpandNode indent={1} name={props.name} icon={<SIcon src={chapter}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}