import * as React from 'react'
import styled from 'styled-components'
import {ContextMenuTYpe, Menu} from "../../lib/interface/ContextMenuTYpe";
import {setContextMenu} from "../../main/over-interface/model/menuContext";
import {ListItem} from "../ListItem";

interface NodeProps {
    selected: boolean
    indent: number
}

const Container = styled(ListItem)<NodeProps>`
    span *{
      margin: 0 5px;
    }
    white-space: nowrap;
    background:${p => p.selected ? p.theme.point :'none'};
    &:hover{
        background:${p => p.theme.point_light};
    };
    padding-left:${p => (p.indent * 32) + "px"}
`

export function TreeNode(props: {
    indent: number,
    front: any,
    name: string,
    menuBuilder: () => Menu,
    onClick?: () => void,
    selected?: boolean
}) {

    function contextMenuHandle(event: React.MouseEvent) {
        event.preventDefault()
        event.stopPropagation()

        setContextMenu(event.clientX,event.clientY,props.menuBuilder())
    }

    function clickHandle() {
        props.onClick && props.onClick();
    }

    const front = <>
        {props.front}
        {props.name}
    </>

    return (
        <Container
            onClick={clickHandle}
            onContextMenu={contextMenuHandle}
            selected={props.selected == true}
            indent={props.indent}
            left={front}
        />
    )
}