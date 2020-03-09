import styled from "styled-components";
import {TreeView} from "./tree-view/TreeView";
import {ContentManager} from "./editor/ContentManager";
import * as React from "react"
import {Novel, Record} from "../../lib/types/project";
import {useTwoWayBind} from "../../lib/browser/hooks/useTwoWayBind";
import {Events} from "../../lib/browser/observer-events";
import {useBind} from "../../lib/browser/hooks/useBind";

const Container=styled.div`
  
`
export interface SectionState {
    saved?:boolean
    sectionData?:string
    uuid?:string
}

export function NovelStateManager(props:{
    novel:Novel
    record:Record
}) {

    const novel=useBind<Novel>(Events.updateNovel_data,props.novel)
    

    return(
        <Container>
            <TreeView novel={novel} cur={props.record.cur}/>
            <ContentManager/>
        </Container>
    )
}