import {ContextMenuTYpe, Menu} from "../lib/interface/ContextMenuTYpe";
import styled from "styled-components";
import * as React from "react";
import {design} from "./design/design";
import {ScrollContainer} from "./container/ScrollContainer";
import {useEffect} from "react";
import {hideLastMenu} from "../main/over-interface/model/menuContext";


const Container = styled(ScrollContainer)`
  min-width: 160px;
  padding: 16px 4px;
  background: ${p => p.theme.panel};
  position: fixed;
  z-index: ${design.z_menu};
  box-shadow: ${design.shadow_s};
  div{
      width: 100%;
      display: inline-flex;
      align-items: center;
      justify-content: flex-start;
      padding:4px 14px;
      &:hover{
        background: ${p=>p.theme.point};
      };
      cursor: pointer;
  }
  *{
  color: ${p=>p.theme.text};
  }
`


export function ContextMenu(props: ContextMenuTYpe) {

    useEffect(()=>{
        document.addEventListener('click',hideLastMenu)
        return ()=>{
            document.removeEventListener('click',hideLastMenu)
        }
    },[])
    return (
        <Container style={{left:props.x,top:props.y}} >
            {props.menu.map(e =>
                <div key={e.label} onClick={e.onClick}>
                    {e.label}
                </div>)}
        </Container>)
}
