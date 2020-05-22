import * as React from "react";
import {useCallback, useMemo} from "react";
import styled from "styled-components";
import {useObservable} from "rxjs-hooks";
import {map} from "rxjs/operators";
import {curSelected$, editState$, setContentInput} from "./model/subject";
import {NodeKey} from "./model/NodeType";
import {changeOpenState, moveNode} from "./model/manager";

interface StyleProp {
    selected: boolean
}

export const nodeMaxWidth = '160px'

const Container = styled.div`
    width: min-content;
    margin-left: 1rem;
    .dragEdge{
        width: 100%;
        height: 12px;
    }
    .dragEnter{
        background-color: ${p => p.theme.point};
    }
`

const Content = styled.div<StyleProp>`
    position: relative;
    display: inline-block;
    z-index: 1;
    max-width: ${nodeMaxWidth};
    width: max-content;
    height: fit-content;
    padding: 0 8px;
    color:${p => p.theme.text};
    outline: ${p => p.selected ? `${p.theme.point} 1px solid` : 'none'};
    &.main{
        background-color: ${p => p.theme.point};
        font-size:200%;
        font-weight: bold;
        color:${p => p.theme.point_text};
        border-radius: 4px;
    }
    &.second{
        border-bottom: ${p => p.theme.point} 1px solid;
        font-size: 125%;
    }
    .openbutton{
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        right: -18px;
        width:16px;
        height:16px;
        cursor: pointer;
        user-select: none;
        border-radius: 50%;
        border: 1px solid ${p => p.theme.text};
        color:${p => p.theme.text};
        background-color: ${p => p.theme.content};
        font-size: 50%;
        text-align: center;
        line-height: 10px;
    }
`

export const SimpleNode = (props: {
    isOpen: boolean | null
    nodeKey: NodeKey
    children?: any
    contentClass?: 'main' | 'second'
}) => {
    const selected = useObservable<boolean, any>(() => curSelected$.pipe(
        map(e => e === props.nodeKey)
    ), false, [props.nodeKey])

    const click = useCallback(() => {
        (!selected) && curSelected$.next(props.nodeKey)
    }, [props.nodeKey])

    const dbclick = useCallback((e: any) => {
            const rect = e.target.getBoundingClientRect()
            editState$.next(setContentInput(props.nodeKey, props.children, rect.left, rect.top, rect.width, rect.height))
        }, [props.nodeKey, props.children]
    )

    const openbtnClick = useCallback((e: any) => {
        changeOpenState(props.nodeKey, !props.isOpen)
        e.stopPropagation()
    }, [props.nodeKey, props.isOpen])

    const openbtnShow: any = useMemo(() => {
        return {visibility: props.isOpen == null ? 'hidden' : 'visible'}
    }, [props.isOpen])

    const drag = useCallback((ev: React.DragEvent) => {
        console.log(ev.dataTransfer)
        ev.dataTransfer.setData('text/plain', props.nodeKey)
        ev.dataTransfer.dropEffect = 'move'

    }, [props.nodeKey])

    const drop = useCallback((ev: React.DragEvent) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text/plain')
        moveNode(data, props.nodeKey, "child")
        unmark(ev)
    }, [props.nodeKey])

    const dropTop = useCallback((ev: React.DragEvent) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text/plain')
        moveNode(data, props.nodeKey, "top")
    }, [props.nodeKey])

    const dropBtm = useCallback((ev: React.DragEvent) => {
        ev.preventDefault();
        const data = ev.dataTransfer.getData('text/plain')
        moveNode(data, props.nodeKey, "bottom")
    }, [props.nodeKey])




    return (
        <Container>
            <div className='dragEdge'
                 onDragEnter={mark}
                 onDragLeave={unmark}
                 onDrop={dropTop}
                 onDragOver={allowDrop}
            />
            <Content
                className={props.contentClass}
                selected={selected}
                onClick={click}
                onDoubleClick={dbclick}
                draggable='true'
                onDragStart={drag}
                onDrop={drop}
                onDragOver={allowDrop}
                onDragEnter={mark}
                onDragLeave={unmark}
            >
                {props.children}
                <div className='openbutton'
                     style={openbtnShow}
                     onDoubleClick={openbtnClick}
                     onClick={openbtnClick}>{props.isOpen ? '-' : "+"}</div>
            </Content>
            <div className='dragEdge'
                 onDrop={dropBtm}
                 onDragEnter={mark}
                 onDragLeave={unmark}
                 onDragOver={allowDrop}
            />
        </Container>
    )
}

function mark(ev: React.DragEvent) {
    ev.preventDefault();
    ev.currentTarget.classList.add('dragEnter')
}

function unmark(ev: React.DragEvent) {
    ev.preventDefault();
    ev.currentTarget.classList.remove('dragEnter')
}

function allowDrop(ev:React.DragEvent) {
    ev.preventDefault()
}