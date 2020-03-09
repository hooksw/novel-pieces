import * as React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

interface ContainerProp {
    width:number
}

const Container = styled.div<ContainerProp>`
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height:48px;
    width:${p=>p.width+"rem"};
    min-width: 8rem;
    padding:8px 16px;
    color:${p=>p.theme.text};
    background:${p=>p.theme.content};
    &:hover{
        background:${p=>p.theme.panel};
    }
`
const Text=styled.span`
    max-width:50%;
    display:inline-block;
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
`

const Info = styled.span`
    font-size:75%;

`

export function BaseListItem(props: {
    width:number
    name: string
    info?: string
}) {

    return (
        <Container width={props.width}>
            <Text>{props.name}</Text>
            <Info>{props.info?props.info:null}</Info>
        </Container>
    )
}