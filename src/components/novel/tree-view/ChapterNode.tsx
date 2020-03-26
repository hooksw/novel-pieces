import {ExpandNode} from "../../common/tree/ExpandNode";
import chapter from "../../../assests/icon/chapter.svg"
import * as React from "react";
import {STIcon} from "../../common/icons";

export function ChapterNode(props:{
    pos:Array<number>
    children?:any
    name:string
    expanded:boolean
}) {
    return(
        <ExpandNode menuBuilder={null} indent={1} name={props.name} icon={<STIcon src={chapter}/>} expanded={props.expanded}>
            {props.children}
        </ExpandNode>
    )
}