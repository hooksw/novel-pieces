import {MsgProps} from "./msg";
import styled from "styled-components";
import * as React from "react";
import {LIcon} from "../common/icons";
import info from '../../assests/icon/info.svg'
import warn from '../../assests/icon/warn.svg'

const Container=styled.div`
  
`

export function MsgItem(props:MsgProps) {
    const icon=props.type=='info'?info:warn
    return(
        <Container>
            <LIcon src={icon}/>
            {props.msg}
        </Container>
    )
}