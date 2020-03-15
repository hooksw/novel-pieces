import {TreeNode} from "../../common/tree/TreeNode";
import section from "../../../assests/icon/section.svg";
import * as React from "react";
import {SIcon} from "../../common/icons";

export function SectionNode(props:{
    name:string,
    depth:Array<number>
    selected:boolean
}) {


    function clickHandle() {
        if(!props.selected){}
    }

    return(
        <TreeNode indent={2} front={<SIcon src={section}/>} name={props.name} selected={props.selected}/>
    )
}