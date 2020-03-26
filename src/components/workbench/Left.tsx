import styled from "styled-components";
import {MetaPanel} from "../meta/MetaPanel";
import {TreeView} from "../novel/tree-view/TreeView";
import {Project} from "../../lib/types/project";
import * as React from "react";

const Container=styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    flex-flow: column nowrap;
    &>*:last-child{
        flex: 1;
    }
`

export function Left(props:{
    project:Project
    curPos:number[]
}) {
    return(
        <Container>
            <MetaPanel meta={props.project.meta}/>
            <TreeView novel={props.project.novel} cur={props.curPos}/>
        </Container>
    )
}