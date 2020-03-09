import styled from "styled-components";
import {design} from "../design";
import {ExitButton} from "../button/ExitButton";
import * as React from "react"
import {FullScreen} from "../styled-componets";

const Container=styled.div`
  border-radius: ${design.radius};
  box-shadow: ${design.shadow_s};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`
const Header=styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  &>*{
    margin: ${design.space_m};
  }
`
const BG=styled(FullScreen)`
  z-index: ${design.z_panel};
`


function Panel(props:{
    children?:any
    onClose:(e:boolean)=>void
    title?:string
}) {


    function exitClick() {
        props.onClose(false)
    }

    return (
        <BG>
            <Container>
                <Header>
                    <div>{props.title}</div>
                    <ExitButton onClick={exitClick}/>
                </Header>
                {props.children}
            </Container>
        </BG>
    )
}