import styled from "styled-components";
import {FullScreen} from "../../../common components/layouts";
import * as React from 'react'
import {NovelList} from "./NovelList";
import {addPanel} from "../model/panels";
import {NewNovel} from "../panels/NewNovel";
import {design} from "../../../common components/design/design";
import {useObservable} from "rxjs-hooks";
import {launchShow$} from "../model/show";

const Container = styled(FullScreen)`
    background:${p => p.theme.panel};
    z-index:${design.z_launch};
    display: grid;
    grid-template-columns: minmax(8rem,40rem) minmax(8rem,40rem);
    grid-template-rows: min-content;
    //grid-auto-flow: row;
    grid-gap: 40px 80px;
    padding: 80px;
    .title{
      grid-area: 1/2/1/2;
      justify-self: end;
    }
    .list{
      grid-area: 2/1/2/1;
    }
    .func{
      grid-area: 2/2/2/2;
    }
`

export function Launch() {
    const show=useObservable(()=>launchShow$,true)

    if(!show) return null
    return (
        <Container>
            <p className='title'>Novels</p>
            <NovelList className='list'/>
            <div className='func'>
                <button onClick={() => {
                    addPanel(<NewNovel/>)
                }}
                >
                    create new Novel
                </button>
            </div>
        </Container>
    )
}