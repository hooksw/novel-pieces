import * as React from 'react'
import {getNovelList} from "../../lib/elec/utils/init/getNovelList";
import {initProject} from "../../lib/browser/utils/initProject";
import {useObservable} from "rxjs-hooks";
import {fromPromise} from "rxjs/internal-compatibility";
import {NovelListItem} from "../../lib/interface/ui";
import {ListItem} from "../../common components/ListItem";
import styled from "styled-components";

const Container=styled.div`
`

export function NovelList(props:{
    className?:any
}) {
    const novelList=useObservable<NovelListItem[]>(()=>fromPromise(getNovelList()),[])


    function clickHandle(dir:string) {
        initProject(dir)
    }

    return (
        <Container className={props.className}>
            {
                novelList.map(e =>
                    <ListItem onClick={()=>clickHandle(e.dir)} key={e.dir} left={e.dir} right={e.lastUpdateTime}/>
                )
            }
        </Container>
    )
}