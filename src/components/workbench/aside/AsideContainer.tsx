import styled from "styled-components";
import * as React from "react";
import {design} from "../../common/design";
import {ScrollContainer} from "../../common/container/ScrollContainer";

const Container=styled(ScrollContainer)`
    height: inherit;
    width: 15rem;
    &>*{
      padding: ${design.space_s};
      margin: 0 auto;
    }
`

export function AsideContainer(props:{
    list:JSX.Element[]
}) {
    return(
        <Container>
            {props.list}
        </Container>
    )
}