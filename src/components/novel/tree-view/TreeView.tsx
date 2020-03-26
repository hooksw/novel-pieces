import * as React from 'react'
import styled from 'styled-components'
import {Novel} from "../../../lib/types/project";
import {PartNode} from "./PartNode";
import {ChapterNode} from "./ChapterNode";
import {SectionNode} from "./SectionNode";
import {ScrollContainer} from "../../common/container/ScrollContainer";
import {useModel} from "../../../lib/browser/model/useModel";
import {model} from "../../../lib/browser/model/Model";
import {ContextMenu} from "../../common/ContextMenu";
import {MenuContext} from "../../../lib/types/MenuContext";
import {useEffect} from "react";

const Container = styled(ScrollContainer)`
    height:inherit;
    position: relative;
    overflow: auto;
`


const nameTrans = (name: string) => name.trim().length == 0 ? "untitled" : name

export const mContextMenu=model<MenuContext>()

export function TreeView(props: {
    novel: Novel
    cur: Array<number>
}) {
    const [menuContext,setMC] = useModel(mContextMenu,null)

    const cur = props.cur

    useEffect(()=>{
        document.addEventListener('click',menuHide)
        document.addEventListener('scroll',menuHide)
        return ()=>{
            document.removeEventListener('click',menuHide)
            document.removeEventListener('scroll',menuHide)
        }
    },[menuContext])

    function menuHide() {
        if(menuContext!=null) setMC(null)
    }

    return (
        <Container>
            {props.novel.content.map((e0, i0) => <PartNode pos={[i0]} key={e0.name} name={nameTrans(e0.name)}
                                                           expanded={i0 === cur[0]}>
                {e0.content.map((e1, i1) => <ChapterNode pos={[i0, i1]} key={e1.name} name={nameTrans(e1.name)}
                                                         expanded={i0 === cur[0] && i1 === cur[1]}>
                    {e1.content.map((e2, i2) => <SectionNode pos={[i0, i1, i2]} key={e2.name}
                                                             name={nameTrans(e2.name)}
                                                             selected={i0 === cur[0] && i1 === cur[1] && i2 == cur[2]}/>)}
                </ChapterNode>)}
            </PartNode>)}
            {menuContext&& (<ContextMenu  menu={menuContext.menu} x={menuContext.x} y={menuContext.y}/>) }
        </Container>

    )
}
