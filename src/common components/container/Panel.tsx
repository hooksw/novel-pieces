import styled from "styled-components";
import {design} from "../design/design";
import {ExitButton} from "../button/ExitButton";
import * as React from "react"
import {closeCurPanel} from "../../lib/browser/subjects/ui/panels";

const Container=styled.div`
  border-radius: ${design.radius};
  box-shadow: ${design.shadow_l};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
    z-index: ${design.z_panel};
    background: ${p=>p.theme.panel};
    display: flex;
    flex-flow: column nowrap;
    &>div{
      flex:1
    }
`
const Header=styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
  justify-content: space-between;
  padding:0 ${design.space_l};
`


function Panel(props:{
    children?:any
    title?:string
    className?:any
}) {


    function exitClick() {
        closeCurPanel()
    }

    return (
            <Container className={props.className}>
                <Header>
                    <span>{props.title}</span>
                    <ExitButton onClick={exitClick}/>
                </Header>
                {props.children}
            </Container>
    )
}

export const SPanel=styled(Panel)`
  width: 25rem;
  height: 25rem;
`
export const MPanel=styled(Panel)`
  width: 35rem;
  height: 30rem;
`
export const LPanel=styled(Panel)`
  width: 45rem;
  height: 35rem;
`