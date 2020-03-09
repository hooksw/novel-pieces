import styled from "styled-components";
import {design} from "../design";
import * as React from "react"
import {useState} from "react";

const TipContainer = styled.div`
  position: absolute;
  left:50%;
  bottom: 100%;
  transform: translateX(-50%);
  box-shadow: ${design.shadow_s};
  padding: ${design.space_s};
  background: ${p => p.theme.dec};
  &:after{
      width: 0;
      height: 0;
      content: '';
      position: absolute;
      top:100%;
      left:50%;
      transform: translateX(-50%);
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 16px solid ${p => p.theme.dec};
  }
`

function ToolTip(props: {
    children?: any
}) {
    return (
        <TipContainer>
            {props.children}
        </TipContainer>
    )
}

const Container = styled.div`
  position: relative;
`

export function ToolTipContainer(props: {
    children?: any
    showOnTooltip?: any
}) {
    const [show, setShow] = useState(false)

    return (
        <Container onMouseOver={e=>setShow(true)} onMouseLeave={e=>setShow(false)}>
            {props.children}
            {show && <ToolTip>{props.showOnTooltip}</ToolTip>}
        </Container>
    )
}