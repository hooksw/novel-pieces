import * as React from 'react'
import {useState, useEffect} from 'react'
import {TreeNode} from './TreeNode'
import styled from 'styled-components'
import fold from "../../assests/icon/fold.svg"
import {SmallIcon} from './styled-componets'
import {Menu} from "../../lib/types/menu";

interface ExpandProps {
    expand: boolean
}

const ExpandIcon = styled(SmallIcon) <ExpandProps>`
    transform:${props => props.expand ? "rotate(90deg)" : "rotate(0deg)"}
`
const ItemContainer = styled.div<ExpandProps>`
    width:100%;
    margin:0;
    padding:0;
    display:${props => props.expand ? "block" : "none"}
`


export function ExpandNode(props: {
    indent: number,
    name: string,
    icon: any,
    children?: any,
    expanded: boolean,
    // menu:Menu
}) {
    const [expand, setExpand] = useState(props.expanded)

    const expandPart = <div>
        <ExpandIcon expand={expand} src={fold}/>
        {props.icon}
    </div>

    return (
        <>
            <TreeNode
                // menu={props.menu}
                indent={props.indent}
                front={expandPart}
                name={props.name}
                clickHandle={e => {
                    setExpand(!expand)
                }}
            />
            <ItemContainer expand={expand}>
                {props.children}
            </ItemContainer>
        </>
    )
}