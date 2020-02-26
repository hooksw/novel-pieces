import styled from "styled-components";
import { FullScreen } from "../../common/styled-componets";
import * as React from 'react'
import { NovelLaunch } from "./novel/NovelLaunch";

const Container = styled(FullScreen)`
    background:${p=>p.theme.app};
    z-index:100;
    display:flex;
    
`
export function Launch() {
    
    return (
        <Container>
            <NovelLaunch/>
        </Container>
    )
}