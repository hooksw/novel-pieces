import * as React from 'react'
import styled from 'styled-components';
import {NovelList} from './NovelList';
import {observer} from "../../../../lib/browser/observer/Observer";
import {mNewNovelShow} from "../../ActivityManager";

const Container = styled.div`
    width:50%;
    min-width: 300px;
    height:80%;
    min-height: 600px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
    
`
const CreateButton = styled.button`

`

export function NovelLaunch() {
    return (
        <Container>
            <Title>Novels</Title>
            <CreateButton onClick={() => mNewNovelShow.set(true)}>create new Novel</CreateButton>
             <NovelList/>
        </Container>
    )
}
