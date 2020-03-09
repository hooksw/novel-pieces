import * as React from "react";
import styled from "styled-components";
import {FullScreen} from "../styled-componets";
import {design} from "../design";
import {ScrollContainer} from "./ScrollContainer";

const BG=styled(FullScreen)`
    display: flex;
    justify-content: flex-start;
    z-index: ${design.z_panel};
`

const Container=styled(ScrollContainer)`
    width: 40%;
    min-width: 240rem;
    height: 100%;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    background-color: ${p=>p.dec};
    &>*{
      margin: ${design.space_m} ;
    }
`
