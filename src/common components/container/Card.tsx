import styled from "styled-components";
import {design} from "../design";
import * as React from "react";
import {ToolTipContainer} from "../data-show/TooTtipContainer";


const Container = styled.div`
  padding: ${design.space_s};
  border-radius: ${design.radius};
`
const Title = styled.p`
  vertical-align: bottom;
  font-weight: ${design.fw_s};
`

export function Card(props: {
    icon?: any
    title: string
    children?: any
}) {
    return (
        <Container>
            <Title>{props.icon}{props.title}</Title>
            {props.children}
        </Container>
    )
}


const ItemContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`

export function CardItem(props: {
    title: string
    des?: any
    children?: any
}) {

    return (
        <ItemContainer>
            <ToolTipContainer showOnTooltip={props.des}>{props.title}</ToolTipContainer>
        </ItemContainer>
    )
}