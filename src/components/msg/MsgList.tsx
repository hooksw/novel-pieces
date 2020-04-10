import styled from "styled-components";
import * as React from "react"
import {ArrayModel} from "../../lib/browser/hooks/Model";
import {useModel} from "../../lib/browser/hooks/useModel";
import {MsgProps} from "./msg";
import {MsgItem} from "./MsgItem";


const Container = styled.div`
  width:30vw;
  padding: 0.5rem;
  overflow-y:auto;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column-reverse nowrap;
`
class MsgModel extends ArrayModel<MsgProps>{
    addInfo(msg:string){
        super.add({
            type:"info",
            msg:msg
        })
    }
    addWarn(msg:string){
        super.add({
            type:"warn",
            msg:msg
        })
    }
}

export const mMsgList=new MsgModel()

export function MsgList() {
    const [list] = useModel(mMsgList,[])


    return (
        <>
            {
                list.length != 0 && (
                    <Container>
                        {
                            list.map((e,i) =>
                                <MsgItem key={i} type={e.type} msg={e.msg}/>
                            )
                        }
                    </Container>
                )
            }
        </>
    )
}