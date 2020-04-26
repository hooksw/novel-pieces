import styled from "styled-components";
import * as React from "react"
import {MsgItem} from "./MsgItem";
import {useObservable} from "rxjs-hooks";
import {msgList$} from "../../lib/browser/subjects/ui/msg";


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


export function MsgList() {
    const list=useObservable(()=>msgList$,[])


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