import {NodeType, Pos} from "./model/NodeType";
import * as React from "react";
import {useEffect, useMemo, useState} from "react";
import styled from "styled-components";
import {SimpleNode} from "./SimpleNode";
import {outline$} from "./model/subject";
import {useObservable} from "rxjs-hooks";
import {map} from "rxjs/operators";

const Container = styled.div`
    position: relative;
    display: flex;
    width: max-content;
    flex-flow: row nowrap;
    align-items: center;
    .children{
       margin-left: 2rem;
    }
    svg{
      width: 100%;
      height: 100%;
      position: absolute;
      top:0;
      left: 0;
      z-index: -1;
    }
`

export function NodeContainer(props: {
    node: NodeType
    className?: any
    count:number
    style?: any
}) {
    const ref = React.useRef<HTMLDivElement>(null)
    const [line, setLine] = useState<JSX.Element | null>(null)
    useEffect(() => {
        if (ref?.current != null) {
            const nodes = ref.current.children
            const {parent, children} = getParentAndChildren(nodes)
            if (parent && children) {
                const {start, childrenRelative} = getPos(parent, children)
                const svg = getPaintedLines(start, 25, childrenRelative)
                setLine(svg)
            }
        }
    }, [props.node])

    const contentClass = useMemo(() => props.count>1 ? undefined : props.count==0 ? 'main' : 'second', [props.count])
    const isOpen=useObservable(()=>outline$.pipe(
        map(e=>props.node.children.length==0?null:!e.closeKeys.includes(props.node.key))
    ),false,[props.node])

    return (
        <Container ref={ref} className={props.className} style={props.style}>
            <SimpleNode isOpen={isOpen} contentClass={contentClass} nodeKey={props.node.key}>{props.node.value}</SimpleNode>
            <svg style={isOpen ? undefined : {visibility: 'hidden'}}>{line}</svg>
            <div className='children' style={isOpen ? undefined : {visibility: 'hidden'}}>
                {props.node.children.map((node) => <NodeContainer key={node.key} node={node}
                                                                count={props.count<2?(props.count+1):2}/>)}
            </div>
        </Container>
    )

}

function getParentAndChildren(nodes: HTMLCollection) {
    const parent: any = nodes[0]
    const children: Element[] = []
    const t = nodes[2].children
    for (let i = 0; i < t.length; i++) {
        children.push(t[i].children[0])
    }

    return {parent, children}
}

function getPos(start: HTMLElement, eles: Element[]) {
    const pp = start.getBoundingClientRect()
    const sp: Pos = {
        x: start.offsetLeft + pp.width,
        y: start.offsetTop + pp.height / 2
    }
    const children = eles.map(e => {
        const cp = e.getBoundingClientRect()
        return {
            x: sp.x + cp.left - pp.right,
            y: sp.y + cp.top - pp.top
        }
    })

    return {
        start: sp,
        childrenRelative: children
    }
}

function getPaintedLines(start: Pos, lineLen: number, childrenRelative: Pos[]): JSX.Element {
    const tx = start.x + lineLen, ty = start.y
    return (
        <>
            {
                childrenRelative.map(e =>
                    <path d={`M${start.x} ${start.y} L ${tx} ${ty} C${tx} ${ty},${e.x - 20} ${e.y}, ${e.x} ${e.y}`}
                          strokeWidth='2' stroke="black" fill="transparent"
                    />
                )
            }
        </>
    )
}