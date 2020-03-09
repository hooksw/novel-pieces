import * as React from 'react'
import { useState, useEffect } from 'react'
import { warnColor as warnColor} from '../../lib/browser/theme/theme'
import styled from 'styled-components'
import { SIcon } from './styled-componets'
import warn from '../../assests/icon/warn.svg'

const Container = styled.span`
    border-radius:2px;
    display:inline-flex;
    background:rgba(256,256,256,0.5);
    padding:8px;
    color:${warnColor};
    font-size:75%;
    max-width:80%;
`

export function Warn(props:{
    msg:string
}) {

    return (
        <Container>
            <SIcon src={warn} />
            {props.msg}
        </Container>
    )
}