import {Menu} from "../lib/interface/MenuContext";
import styled from "styled-components";
import * as React from "react";
import {design} from "./design";
import {FlexCol} from "./layouts";


const Container = styled(FlexCol)`
  background: ${p => p.theme.panel};
  position: fixed;
  z-index: ${design.z_float};
  box-shadow: 3px 3px 3px #cccccc;
  span{
      padding:0.5rem 1rem;
  }
  *{
  color: ${p=>p.theme.text};
  }
`


export function ContextMenu(props: {
    menu: Menu,
    x:number
    y:number
}) {
    return (
        <Container style={{left:props.x,top:props.y}} >
            {props.menu.map(e =>
                <span onClick={e.onClick}>
                    {e.label}
                </span>)}
        </Container>)
}
