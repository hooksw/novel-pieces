import {TreeNode} from "../../../common components/tree/TreeNode";
import section from "../../../assests/icon/section.svg";
import * as React from "react";
import {STIcon} from "../../../common components/icons";
import {Menu} from "../../../lib/interface/MenuContext";
import {removeChapterPanel, renameChapterPanel} from "../novel-operations/common operations";
import {Array2} from "../../../lib/interface/common-types";
import {updateCur} from "../../../lib/browser/subjects/project-data/record";

const chapterMenuBuilder = (pos: Array2<number>,paths:Array2<string>, name: string):Menu => {
    return [
        renameChapterPanel(pos,paths,name,'rename chapter'),
        removeChapterPanel(pos,paths[0],paths[1],'delete chapter')
    ]
}

export function ChapterNode(props: {
    name: string,
    path: Array2<string>
    pos:Array2<number>
    selected: boolean
}) {


    function clickHandle() {
        if (!props.selected) {
            updateCur(props.pos)
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