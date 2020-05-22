import styled from "styled-components";
import * as React from "react"
import {AsideBar} from "./aside/AsideBar";
import {NovelResize} from "./NovelResize";

const Container = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-flow: row nowrap;
  &>*{
    height: inherit;
  }
  &>.right{
    flex:1;
  }
`


export function ProjectContainer() {

    return (
        <Container>
            <AsideBar className='aside'/>
            <div className='right'>
                <NovelResize/>
            </div>
        </Container>
    )
}