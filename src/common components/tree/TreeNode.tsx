import * as React from 'react'
import styled from 'styled-components'
import {Menu, MenuContext} from "../../lib/interface/MenuContext";
import {treeContextMenu$} from "../../lib/browser/subjects/ui/menuContext";
import {ListItem} from "../ListItem";
import {maskShow$} from "../../lib/browser/subjects/ui/show";

interface NodeProps {
    selected: boolean
    indent: number
}

const Container = styled(ListItem)<NodeProps>`
    background:${p => p.selected ? p.theme.point :'none'};
    &:hover{
        background:${p => p.theme.point_light};
    };
    padding-left:${p => (p.indent * 2) + "rem"}
`

export function TreeNode(props: {
    indent: number,
    front: any,
    name: string,
    menuBuilder: () => Menu,
    onClick?: () => void,
    selected?: boolean
}) {

    function contextMenuHandle(event: any) {
        maskShow$.next(true)
        event.preventDefault()
        let x, y

        const screenH = window.innerHeight
        const rootH = 50

        const bottom = (screenH - event.clientY) > rootH

        x = event.clientX
        y = bottom ? event.clientY : (event.clientY - rootH)
        const context: MenuContext = {
            menu: props.menuBuilder(),
            x: x, y: y
        }
        treeContextMenu$.next(context)
    }

    function clickHandle() {
        props.onClick && props.onClick();
        treeContextMenu$.next(null)
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