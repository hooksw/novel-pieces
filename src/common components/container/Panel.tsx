import styled from "styled-components";
import {design} from "../design/design";
import {ExitButton} from "../button/ExitButton";
import * as React from "react"
import {closeCurPanel} from "../../main/over-interface/model/panels";

const Container = styled.div`
  border-radius: ${design.radius};
  box-shadow: ${design.shadow_l};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
    z-index: ${design.z_panel};
    background: ${p => p.theme.panel};
    display: flex;
    flex-flow: column nowrap;
    &>div{
      flex:1
    }
    &>.header{
      display: flex;
      flex-flow: row nowrap;
      align-items: flex-end;
      justify-content: space-between;
      padding:0 ${design.space_l};
    }
    &>.main{
      width: inherit;
      height: inherit;
      padding:0 ${design.space_l};
    }
`

function Panel(props: {
    children?: any
    title?: string
    className?: any
}) {


    function exitClick() {
        closeCurPanel()
    }

    return (
        <Container className={props.className}>
                <span className='header'>
                    <span>{props.title}</span>
                    <ExitButton onClick={exitClick}/>
                </span>
            <div className='main'>
                {props.children}
            </div>
        </Container>
    )
}

export const SPanel = styled(Panel)`
  width: 400px;
  max-height: 400px;
`
export const MPanel = styled(Panel)`
  width: 560px;
  max-height: 560px;
`
export const LPanel = styled(Panel)`
  width: 45rem;
  max-height: 35rem;
`