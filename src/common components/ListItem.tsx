import * as React from 'react'
import styled from 'styled-components'
import {FlexRowBetw} from "./layouts";

const Container = styled(FlexRowBetw)`
    width:inherit;
    color:${p => p.theme.text};
    background:${p => p.theme.content};
    padding: 4px 0;
    &:hover{
        background:${p => p.theme.point};
    }
    *{
    user-select: none;
    }
    &>*{
      display: inline;
      overflow: hidden;
      word-break: keep-all;
      text-overflow: ellipsis;
    }
`

export function ListItem(props: {
    left: any
    right?:any
    onClick?:any
    onContextMenu?:any
    className?:any
}) {

    return (
        <Container onClick={props.onClick} onContextMenu={props.onContextMenu} className={props.className}>
            <span>{props.left}</span>
            <span>{props.right}</span>
        </Container>
    )
}