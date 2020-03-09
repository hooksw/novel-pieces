import styled from "styled-components";
import * as React from "react";

const Container=styled.div`
  transform: rotate(45deg);
`
export const ExitButton=(props:{
    onClick:()=>void
})=>(<Container onClick={props.onClick}>+</Container>)