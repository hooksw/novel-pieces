import styled from "styled-components";
import * as React from "react";
import {NodeContainer} from "./NodeContainer";
import {MainNodeType} from "./model/NodeType";


const Container = styled(NodeContainer)`
    position: absolute;
`

export const MainNode = React.memo((props: MainNodeType) => {
    return (
        <Container
            node={props.node}
            count={0}
            style={{left: props.x, top: props.y}}
        />
    )
}, compare)

function compare(pre: MainNodeType, next: MainNodeType) {
    return pre.node == next.node
}