import styled from "styled-components";
import * as React from "react"
import {TwoColumn} from "./TwoColumn";
import {EditorManager} from "../novel/editor/EditorManager";
import {useObservable} from "rxjs-hooks";
import {curPath$} from "../../lib/browser/subjects/ui/cur";
import {TreeView} from "../novel/tree-view/TreeView";

const Container = styled(TwoColumn)`
  height: 100vh;
  width: 100vw;
`


export function ProjectContainer() {
    const curPath = useObservable(() => curPath$)

    return (
        <>
            <Container
                left={<TreeView/>}
                right={<EditorManager curPath={curPath}/>}
            />
        </>
    )
}