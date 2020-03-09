import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { SIcon } from './styled-componets'
import warn from '../../assests/icon/warn.svg'
import {design} from "./design";

const Container = styled.span`
    border-radius:2px;
    display:inline-flex;
    background:rgba(256,256,256,0.5);
    padding:8px;
    color:${design.color.warn};
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