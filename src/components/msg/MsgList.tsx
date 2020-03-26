import styled from "styled-components";
import * as React from "react"
import {arrayModel} from "../../lib/browser/model/Model";
import {useModel} from "../../lib/browser/model/useModel";
import {MsgProps} from "./msg";
import {MsgItem} from "./MsgItem";


const Container = styled.div`
  width:30vw;
  padding: 0.5rem;
  overflow: scroll;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column-reverse nowrap;
`

export const mMsgList=arrayModel<MsgProps>()

export function MsgList() {
    const [list] = useModel(mMsgList,[])


    return (
        <>
            {
                list.length != 0 && (
                    <Container>
                        {
                            list.map(e =>
                                <MsgItem key={e.msg} type={e.type} msg={e.msg}/>
                            )
                        }
                    </Container>
                )
            }
        </>
    )
}