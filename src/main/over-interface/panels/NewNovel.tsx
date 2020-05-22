import * as React from "react";
import {useState} from "react";
import styled, {keyframes} from "styled-components";
import {ErrorCheck, MDInput} from "../../../common components/input/MDInput";
import loading from "../../../assests/icon/loading.svg"
import {createNewNovel} from "../../../lib/elec/utils/init/createNewNovel";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {STIcon} from "../../../common components/icons";
import {Background, FlexCol} from "../../../common components/layouts";
import {MPanel} from "../../../common components/container/Panel";


const Input = styled(MDInput)`
  width:50%;
  max-width: 480px;
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
  margin: 0 5px;
`

export function NewNovel() {
    const [creating, setCreating] = useState(false)
    let name: string = ""

    function clickHandle() {
        if (creating) return;
        const isEmpty = name.trim().length == 0


        if (!isEmpty) {
            setCreating(true)
            createNewNovel(name)
        }
    }


    const emptyCheck: ErrorCheck = {
        check: (e: string) => e.trim().length === 0,
        error: "该字段不能为空"
    }

    return (
        <Background>
            <MPanel title="新建小说">
                <FlexCol>
                    {/*<Title>新建小说</Title>*/}
                    <Input label="name"
                           maxSize={50}
                           showCount={true}
                           valueChangeHandle={e => {
                               name = e
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
