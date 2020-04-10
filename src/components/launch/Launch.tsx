import styled from "styled-components";
import {FullScreen} from "../../common components/layouts";
import * as React from 'react'
import {NovelList} from "./NovelList";
import {Title} from "../../common components/text";
import {addPanel} from "../../lib/browser/subjects/ui/panels";
import {NewNovel} from "../panels/NewNovel";

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
                    addPanel(<NewNovel/>)
                }}
                >
                    create new Novel
                </button>
                <NovelList/>
        </Container>
    )
}