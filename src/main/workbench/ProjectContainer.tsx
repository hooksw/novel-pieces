import styled from "styled-components";
import * as React from "react"
import {TwoColumn} from "../../common components/container/TwoColumn";
import {TreeView} from "../novel/tree-view/TreeView";
import {Right} from "./Right";

const Container = styled(TwoColumn)`
  height: 100vh;
  width: 100vw;
`


export function ProjectContainer() {

    return (
        <>
            <Container
                left={<TreeView/>}
                right={<Right/>}
            />
        </>
    )
}