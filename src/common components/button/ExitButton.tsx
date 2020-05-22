import styled from "styled-components";
import * as React from "react";
import {BaseButton} from "./BaseButton";

const Container=styled(BaseButton)`
  transform: rotate(45deg);
  font-size: 200%;
`
export const ExitButton=(props:{
    onClick:()=>void
})=>(<Container title="关闭" onClick={props.onClick}>+</Container>)