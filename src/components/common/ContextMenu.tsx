import {Menu} from "../../lib/types/menu";
import styled from "styled-components";
import * as React from "react";
import MenuItem = Electron.MenuItem;

interface AppOrEditor {
    isApp: boolean
    x: number
    y: number
}

const Container = styled.div<AppOrEditor>`
  padding:0.5rem 1rem;
  background: ${p => p.isApp ? p.theme.panel : p.theme.content};
  position: fixed;
  left:${p => p.x + "px"};
  top:${p => p.y + "px"};
  box-shadow: 3px 3px 3px #cccccc;
`
const Item = styled.span`
  
`

export interface Pos {
    x: number,
    y: number
}

export function ContextMenu(props: {
    menu: Menu,
    bg: "app" | "editor",
    pos: Pos
}) {
    return (
        <Container isApp={props.bg == "app"} x={props.pos.x} y={props.pos.y}>
            {props.menu.map(e =>
                <Item onClick={e.click}>
                    {e.label}
                </Item>)}
        </Container>)
}
