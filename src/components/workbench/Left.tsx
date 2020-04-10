import styled from "styled-components";
import {TreeView} from "../novel/tree-view/TreeView";
import * as React from "react";
import {useObservable} from "rxjs-hooks";
import {novel$} from "../../lib/browser/subjects/project-data/novel";
import {Novel} from "../../lib/interface/project";
import {curPos$} from "../../lib/browser/subjects/ui/cur";

const Container=styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-flow: column nowrap;
    &>*:last-child{
        flex: 1;
    }
`

export function Left() {
    const novel =useObservable<Novel>(()=>novel$)
    const curPos=useObservable(()=>curPos$)
    return(
        <Container>
            { novel&&<TreeView novel={novel} cur={curPos}/>}
        </Container>
    )
}