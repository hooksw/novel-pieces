import * as React from "react";
import {useState} from "react";
import styled, {keyframes} from "styled-components";
import {BaseButton, SmallIcon, FullScreen} from "../common/styled-componets";
import {BaseInput} from "../common/BaseInput";
import loading from "../../assests/icon/loading.svg"
import {Warn} from "../common/Warn";
import {initWorkbench} from "../../lib/browser/initWorkBench";
import {createNewNovel} from "../../lib/common/createNewNovel";

const BG = styled(FullScreen)`
  z-index: 200;
  background: rgba(255,255,255,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  background: ${p => p.theme.app};
  width:60%;
  height: 80%;
  min-width:20rem;
  min-height:25rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: #cccccc 3px 3px 3px;
`
const Input = styled(BaseInput)`
  width:50%;
  max-width: 30rem;
`
const Title = styled.h2`

`
const Button = styled(BaseButton)`
  display: flex;
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
const LoadingIcon = styled(SmallIcon)`
  filter: drop-shadow(${p => p.theme.appTxt} 80 0);
  animation: ${rotate} 1s linear 0s infinite;
  margin: 0 0.3rem;
`

export function NewNovel() {
    const [warn, setWarn] = useState<string>(null)
    const [creating, setCreating] = useState(false)
    let name: string = ""
    let author: string = ""

    function clickHandle() {
        if (creating) return;
        const check = name.trim().length == 0 || author.trim().length == 0
        setWarn("所填项不能为空或为空格")
        setCreating(!check)

        if(!check){
            createNewNovel(name,author).then((dir:string)=>initWorkbench(dir))
        }
    }

    return (
        <BG>
            <Container>
                <Title>新建小说</Title>
                <Input label="name"
                       maxSize={50}
                       count={true}
                       valueChangeHandle={e => {
                           name = e
                       }}/>
                <Input label="author"
                       valueChangeHandle={e => {
                           author = e
                       }}/>
                {warn && (<Warn msg={warn}/>)}
                <Button onClick={clickHandle}>
                    完成
                    {creating && (<LoadingIcon src={loading}/>) }
                </Button>
            </Container>
        </BG>
    )
}