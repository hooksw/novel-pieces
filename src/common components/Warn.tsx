import * as React from 'react'
import styled from 'styled-components'
import warn from '../assests/icon/warn.svg'
import {design} from "./design";
import {SIcon} from "./icons";

const Container = styled.span`
    border-radius:2px;
    display:inline-flex;
    background:rgba(256,256,256,0.5);
    padding:${design.space_s};
    color:${design.color.warn};
    font-size:75%;
`


export function Warn(props:{
    children?:any
    className?:any
}) {


    return (
        <Container className={props.className}>
            <SIcon src={warn} />
            {props.children}
        </Container>
    )
}