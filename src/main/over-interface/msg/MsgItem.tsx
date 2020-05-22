import styled from "styled-components";
import * as React from "react";
import {LIcon} from "../../../common components/icons";
import info from '../../../assests/icon/info.svg'
import warn from '../../../assests/icon/warn.svg'
import {MsgProps} from "../../../lib/interface/msg";

const Container=styled.div`
  width: 100%;
  font-size: 75%;
`

export function MsgItem(props:MsgProps) {
    const icon=props.type=='info'?info:warn
    return(
        <Container>
            <LIcon src={icon}/>
            <p>{props.msg}</p>
        </Container>
    )
}