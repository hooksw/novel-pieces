import * as React from 'react'
import styled from 'styled-components';
import {FullScreen} from '../common/styled-componets';
import {design} from "../common/design";

const Container = styled(FullScreen)`
    background:rgba(255,255,255,0.5);
    z-index:${design.z_panel};
`

export function Welcome() {
    return (
        <Container></Container>
    )
}