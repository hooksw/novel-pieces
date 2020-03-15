import * as React from 'react'
import styled from 'styled-components';
import {Background} from '../common/layouts';
import {design} from "../common/design";

const Container = styled(Background)`
    z-index:${design.z_panel};
`

export function Welcome() {
    return (
        <Container></Container>
    )
}