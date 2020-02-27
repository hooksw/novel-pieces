import {TreeNode} from "../../common/TreeNode";
import section from "../../../assests/icon/section.svg";
import {SmallIcon} from "../../common/styled-componets";
import * as React from "react";
import {Menu} from "../../../lib/types/menu";

export function SectionNode(props:{
    name:string,
    depth:Array<number>
}) {


    function clickHandle() {

    }

    return(
        <TreeNode indent={2} front={<SmallIcon src={section}/>} name={props.name} />
    )
}