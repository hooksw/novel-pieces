import styled from "styled-components";
import {FullScreen} from "../common/layouts";
import * as React from 'react'
import {panelsManager} from "../panels/PanelsManager";
import {key, newNovel} from "../panels/NewNovel";
import {NovelList} from "./NovelList";
import {Title} from "../common/text";

const Container = styled(FullScreen)`
    background:${p=>p.theme.panel};
    z-index:100;
    display:flex;
    flex-flow: column;
    justify-content: space-around;
`
export function Launch() {
    
    return (
        <Container>
                <Title>Novels</Title>
                <button onClick={() =>{
                    console.log("newNovel.key:"+newNovel.key)
                    panelsManager.add(key,newNovel)
                }}
                >
                    create new Novel
                </button>
                <NovelList/>
        </Container>
    )
}