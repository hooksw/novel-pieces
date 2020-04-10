import {TreeNode} from "../../../common components/tree/TreeNode";
import section from "../../../assests/icon/section.svg";
import * as React from "react";
import {STIcon} from "../../../common components/icons";
import {Menu} from "../../../lib/interface/MenuContext";
import {mCurPos} from "../../workbench/ProjectContainer";
import {remove, rename} from "../novel-operations/common operations";

const chapterMenuBuilder = (pos: number[],paths:string[], name: string):Menu => {
    return [
        rename(pos,paths,name,'rename chapter'),
        remove(pos,paths,'delete chapter')
    ]
}

export function ChapterNode(props: {
    name: string,
    path: string[]
    pos:number[]
    selected: boolean
}) {


    function clickHandle() {
        if (!props.selected) {
            mCurPos.set(props.path)
        }
    }

    return (
        <TreeNode
            indent={2}
            front={<STIcon src={section}/>}
            name={props.name}
            selected={props.selected}
            menuBuilder={() => chapterMenuBuilder(props.pos, props.path,props.name)}
            onClick={clickHandle}
        />
    )
}