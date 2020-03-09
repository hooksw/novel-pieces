import * as React from 'react'
import styled from 'styled-components';
import {NovelList} from './NovelList';
import {bindTrigger} from "../../../../lib/browser/hooks/bindTrigger";
import {Events} from "../../../../lib/browser/observer-events";

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
            <CreateButton onClick={() => bindTrigger(Events.newNovel_show, true)}>create new Novel</CreateButton>
             <NovelList/>
        </Container>
    )
}
