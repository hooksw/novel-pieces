import {Menu} from "../../lib/types/MenuContext";
import styled from "styled-components";
import * as React from "react";


const Container = styled.div`
  padding:0.5rem 1rem;
  background: ${p => p.theme.panel};
  position: fixed;
  box-shadow: 3px 3px 3px #cccccc;
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
