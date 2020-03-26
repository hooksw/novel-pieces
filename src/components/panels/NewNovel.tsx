import * as React from "react";
import {useState} from "react";
import styled, {keyframes} from "styled-components";
import {MDInput, ErrorCheck} from "../common/input/MDInput";
import loading from "../../assests/icon/loading.svg"
import {createNewNovel} from "../../lib/common/createNewNovel";
import {ConfirmButton} from "../common/button/ConfirmButton";
import {STIcon} from "../common/icons";
import {Background, FlexCol} from "../common/layouts";
import {MPanel} from "../common/container/Panel";
import {panelsManager} from "./PanelsManager";


const Input = styled(MDInput)`
  width:50%;
  max-width: 30rem;
`

const Button = styled(ConfirmButton)`
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
`
const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`
const LoadingIcon = styled(STIcon)`
  animation: ${rotate} 1s linear 0s infinite;
  margin: 0 0.3rem;
`

function NewNovel() {
    const [creating, setCreating] = useState(false)
    let name: string = ""
    let author: string = ""

    function clickHandle() {
        if (creating) return;
        const isEmpty = name.trim().length == 0 || author.trim().length == 0


        if (!isEmpty) {
            setCreating(true)
            createNewNovel(name, author)
        }
    }

    function closeHandle() {
        panelsManager.delete(key)
    }

    const emptyCheck: ErrorCheck = {
        check: (e: string) => e.trim().length === 0,
        error: "该字段不能为空"
    }

    return (
        <Background>
            <MPanel onClose={closeHandle} title="新建小说">
                <FlexCol>
                    {/*<Title>新建小说</Title>*/}
                    <Input label="name"
                           maxSize={50}
                           count={true}
                           valueChangeHandle={e => {
                               name = e
                           }}
                           errorCheck={emptyCheck}/>
                    <Input label="author"
                           valueChangeHandle={e => {
                               author = e
                           }}
                           errorCheck={emptyCheck}/>
                    <Button onClick={clickHandle}>
                        完成
                        {creating && (<LoadingIcon src={loading}/>)}
                    </Button>
                </FlexCol>
            </MPanel>
        </Background>

    )
}

export const key="new novel"
export const newNovel=<NewNovel/>