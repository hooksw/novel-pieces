import {Project} from "../../lib/types/project";
import {ProjectContainer} from "./ProjectContainer";
import {FlexCol, FlexRow} from "../common/layouts";
import {useModel} from "../../lib/browser/model/useModel";
import {model} from "../../lib/browser/model/Model";
import styled from "styled-components";
import React = require("react");

const Container = styled(FlexCol)`
    width: 100vw;
    height: 100vh;
    .main{
      width: 100%;
      flex: 1;
    }
`


export function Workbench() {
    return (
        <Container>
            <div className='menu'></div>
            <ProjectContainer />
        </Container>
    )
}