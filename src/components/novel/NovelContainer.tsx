import styled from "styled-components";
import {TreeView} from "./tree-view/TreeView";
import {ContentManager} from "./editor/ContentManager";
import * as React from "react"
import {Novel, Section} from "../../lib/types/project";
import {TwoColumn} from "../common/container/TwoColumn";
import {model, showModel} from "../../lib/browser/modle/Model";
import {useModel} from "../../lib/browser/modle/useModel";
import {projectManager} from "../../lib/browser/utils/ProjectManager";

const Container = styled(TwoColumn)`
  height: 100vh;
  width: 100vw;
`

export const mNovel=model<Novel>()
export const mCurSection=model<Section>()
export const mLeftShow=showModel()

export function NovelContainer(props: {
    novel: Novel
    cur: number[]
}) {
    const [novel] = useModel(mNovel,props.novel)
    const [curSection] = useModel<Section>(mCurSection, projectManager.novel.findSection(novel,props.cur))
    const [leftShow]=useModel(mLeftShow,true)
    return (
        <Container
            leftShow={leftShow}
            left={<TreeView novel={novel} cur={props.cur}/>}
            right={<ContentManager section={curSection}/>}
        />


    )
}