import * as React from 'react'
import styled from 'styled-components';
import {Background} from '../../common components/layouts';
import {design} from "../../common components/design";

const Container = styled(Background)`
    z-index:${design.z_panel};
`

function Welcome() {
    return (
        <Container></Container>
    )
}
