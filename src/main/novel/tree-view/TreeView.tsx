import * as React from 'react'
import styled from 'styled-components'
import {Novel} from "../../../lib/interface/project";
import {PartNode} from "./PartNode";
import {ChapterNode} from "./ChapterNode";
import {ScrollContainer} from "../../../common components/container/ScrollContainer";
import {ContextMenu} from "../../../common components/ContextMenu";
import {RootNode} from "./RootNode";
import {useObservable} from "rxjs-hooks";
import {treeContextMenu$} from "../../../lib/browser/subjects/ui/menuContext";
import {MenuContext} from "../../../lib/interface/MenuContext";
import {novel$} from "../../../lib/browser/subjects/project-data/novel";
import {curPos$} from "../../../lib/browser/subjects/ui/cur";
import {rootName$} from "../../../lib/elec/utils/io";

const Container = styled(ScrollContainer)`
    height:inherit;
    position: relative;
    overflow: auto;
    background: ${p => p.theme.panel};
`


// const adjustName = (name: string) => name.trim().length == 0 ? "untitled" : name


export function TreeView() {
    const novel = useObservable<Novel>(() => novel$)
    const curPos = useObservable(() => curPos$)

    const menuContext = useObservable<MenuContext | null>(() => treeContextMenu$)


    function getActived(arr: number[]): boolean {
        if (curPos == null) return false;
        return arr.every((v, i) => v == curPos[i])
    }

    return (
        <Container>
            {novel &&
            <RootNode name={rootName$.value}>
                {novel.content.map((e0, i0) => <PartNode name={e0.name}
                                                         pos={i0}
                                                         key={e0.name}
                                                         expanded={getActived([i0])}>
                    {e0.content.map((e1, i1) => <ChapterNode name={e1.name}
                                                             pos={[i0, i1]}
                                                             path={[e0.name, e1.name]}
                                                             uuid={e1.uuid}
                                                             key={e1.name}
                                                             selected={getActived([i0, i1])}/>)}

                </PartNode>)}

            </RootNode>
            }

            {menuContext && (<ContextMenu menu={menuContext.menu} x={menuContext.x} y={menuContext.y}/>)}
        </Container>

    )
}
