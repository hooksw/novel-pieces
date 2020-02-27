import * as React from 'react'
import styled from 'styled-components';
import {FullScreen} from '../common/styled-componets';

const Container = styled(FullScreen)`
    background:rgba(255,255,255,0.5);
    z-index:300;
`

export function Welcome() {
    return (
        <Container></Container>
    )
}