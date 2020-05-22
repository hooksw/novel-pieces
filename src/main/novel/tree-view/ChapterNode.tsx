import {TreeNode} from "../../../common components/tree/TreeNode";
import section from "../../../assests/icon/section.svg";
import * as React from "react";
import {STIcon} from "../../../common components/icons";
import {Menu} from "../../../lib/interface/ContextMenuTYpe";
import {removeChapterPanel, renameChapterPanel} from "../novel-operations/common operations";
import {Array2} from "../../../lib/interface/common";
import {updateCurUUID} from "../../../lib/browser/model/record";

const chapterMenuBuilder = (parent:number,self:number,name: string):Menu => {
    return [
        renameChapterPanel(parent,self,name,'rename chapter'),
        removeChapterPanel(parent,self,'delete chapter')
    ]
}

export function ChapterNode(props: {
    name: string,
    parent:number,
    self:number,
    uuid:string,
    selected: boolean
}) {


    function clickHandle() {
        if (!props.selected) {
            updateCurUUID(props.uuid)
        }
    }

    return (
        <TreeNode
            indent={2}
            front={<STIcon src={section}/>}
            name={props.name}
            selected={props.selected}
            menuBuilder={() => chapterMenuBuilder(props.parent, props.self,props.name)}
            onClick={clickHandle}
        />
    )
}