import styled from "styled-components";
import {design} from "./design/design";
import {ExitButton} from "./button/ExitButton";
import React = require("react");

interface Props {
    checked:boolean
}

const Container=styled.div<Props>`
    display: inline-flex;
    padding: ${design.space_m};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: ${p=>p.checked?p.theme.content:p.theme.panel};
    color: ${p=>p.theme.text};
    &:hover{
      background-color: ${p=>p.theme.trans};
    }
    text-overflow: ellipsis;
`

export function Tab(props:{
    checked:boolean
    children:any,
    onClick:()=>void,
    onClose?:()=>void
}){
    return(
        <Container checked={props.checked}>
            {props.children}
            <span>{props.onClose&&<ExitButton onClick={props.onClose}/>}</span>
        </Container>
    )
}