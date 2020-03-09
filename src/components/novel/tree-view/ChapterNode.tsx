import {ExpandNode} from "../../common/tree/ExpandNode";
import chapter from "../../../assests/icon/chapter.svg"
import {SIcon} from "../../common/styled-componets";
import * as React from "react";

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