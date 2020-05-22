import * as React from 'react'
import styled from 'styled-components'
import {Novel} from "../../../lib/interface/project";
import {PartNode} from "./PartNode";
import {ChapterNode} from "./ChapterNode";
import {ScrollContainer} from "../../../common components/container/ScrollContainer";
import {RootNode} from "./RootNode";
import {useObservable} from "rxjs-hooks";
import {getPosFromUUID, novel$} from "../../../lib/browser/model/novel";
import {rootName$} from "../../../lib/elec/utils/io";
import {log} from "../../../utils/debug";
import {record$} from "../../../lib/browser/model/record";
import {map} from "rxjs/operators";

const Container = styled(ScrollContainer)`
    width: inherit;
    height:inherit;
    position: relative;
    overflow: auto;
    background: ${p => p.theme.panel};
`


// const adjustName = (name: string) => name.trim().length == 0 ? "untitled" : name


export function TreeView(props:{
    className?:any
    style?:any
}) {
    const novel = useObservable<Novel>(() => novel$)
    const curUUID = useObservable(() => record$.pipe(
        map(e=>e.curUUID)
    ))

    const curPos=getPosFromUUID(curUUID)

    function getActived(arr: number[]): boolean {
        if (curPos == null) return false;
        return arr.every((v, i) => v == curPos![i])
    }


    log(novel)
    return (
        <Container className={props.className} style={props.style}>
            {novel &&
            <RootNode name={rootName$.value}>
                {novel.content.map((e0, i0) =>
                    <PartNode name={e0.name}
                              pos={i0}
                              key={e0.name}
                              expanded={getActived([i0])}>
                        {e0.content.map((e1, i1) =>
                            <ChapterNode name={e1.name}
                                         parent={i0}
                                         self={i1}
                                         uuid={e1.uuid}
                                         key={e1.uuid}
                                         selected={getActived([i0, i1])}/>)}

                    </PartNode>)}

            </RootNode>
            }
        </Container>

    )
}
