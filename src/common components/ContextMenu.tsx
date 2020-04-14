import {Menu} from "../lib/interface/MenuContext";
import styled from "styled-components";
import * as React from "react";
import {design} from "./design";
import {FlexCol} from "./layouts";
import {record$} from "../lib/browser/subjects/project-data/record";


const Container = styled(FlexCol)`
  min-width: 10rem;
  padding: 1rem 0.2rem;
  background: ${p => p.theme.panel};
  position: fixed;
  z-index: ${design.z_menu};
  box-shadow: ${design.shadow_s};
  div{
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      padding:0.25rem 1rem;
      &:hover{
        background: ${p=>p.theme.point};
      };
      cursor: pointer;
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
                <div key={record$.value.cur+e.label} onClick={e.onClick}>
                    {e.label}
                </div>)}
        </Container>)
}
