import {TreeNode} from "../../common/tree/TreeNode";
import section from "../../../assests/icon/section.svg";
import * as React from "react";
import {STIcon} from "../../common/icons";
import {Menu} from "../../../lib/types/MenuContext";
import {panelsManager} from "../../panels/PanelsManager";
import {key_newFile, NewFile} from "../novel-operations/NewFile";
import {projectManager} from "../../../lib/browser/utils/ProjectManager";
import {mCurPos} from "../../workbench/ProjectContainer";

const sectionMenuBuilder = (pos: number[]) => {
    const menu: Menu = [
        {
            label: 'add',
            onClick: () => panelsManager.add(key_newFile,
                <NewFile pos={pos}
                         onConfirm={e => projectManager.novel.addSection(pos, e)}
                         title='新建section'
                />
            )
        }
    ]
    return menu
}

export function SectionNode(props: {
    name: string,
    pos: Array<number>
    selected: boolean
}) {


    function clickHandle() {
        if (!props.selected) {
            mCurPos.set(props.pos)
        }
    }

    return (
        <TreeNode
            indent={2}
            front={<STIcon src={section}/>}
            name={props.name}
            selected={props.selected}
            menuBuilder={() => sectionMenuBuilder(props.pos)}
            onClick={clickHandle}
        />
    )
}