import * as React from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import {Novel} from "../../../lib/interface/project";
import {PartNode} from "./PartNode";
import {ChapterNode} from "./ChapterNode";
import {ScrollContainer} from "../../../common components/container/ScrollContainer";
import {ContextMenu} from "../../../common components/ContextMenu";
import {RootNode} from "./RootNode";
import {useObservable} from "rxjs-hooks";
import {menuContext$} from "../../../lib/browser/subjects/ui/menuContext";
import {MenuContext} from "../../../lib/interface/MenuContext";

const Container = styled(ScrollContainer)`
    height:inherit;
    position: relative;
    overflow: auto;
    background: ${p => p.theme.panel};
`


const adjustName = (name: string) => name.trim().length == 0 ? "untitled" : name


export function TreeView(props: {
    novel: Novel
    cur: number[] | null
}) {
    const menuContext = useObservable<MenuContext|null>(() => menuContext$)


    useEffect(() => {
        document.addEventListener('click', menuHide)
        document.addEventListener('scroll', menuHide)
        return () => {
            document.removeEventListener('click', menuHide)
            document.removeEventListener('scroll', menuHide)
        }
    }, [menuContext])

    function menuHide() {
        if (menuContext != null) menuContext$.next(null)
    }

    function getActived(arr: number[]): boolean {
        const cur = props.cur
        if (cur == null) return false;
        return arr.every((v, i) => v == cur[i])
    }

    return (
        <Container>
            <RootNode name={props.novel.name}>
                {props.novel.content.map((e0, i0) => <PartNode name={adjustName(e0.name)}
                                                               pos={[i0]}
                                                               path={[e0.name]}
                                                               key={e0.name}
                                                               expanded={getActived([i0])}>
                    {e0.content.map((e1, i1) => <ChapterNode name={e1.name}
                                                             pos={[i0, i1]}
                                                             path={[e0.name, e1.name]}
                                                             key={e1.name}
                                                             selected={getActived([i0, i1])}/>)}

                </PartNode>)}

            </RootNode>
            {menuContext && (<ContextMenu menu={menuContext.menu} x={menuContext.x} y={menuContext.y}/>)}
        </Container>

    )
}
