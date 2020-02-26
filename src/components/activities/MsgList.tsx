import styled from "styled-components";
import * as React from "react"
import {MsgType} from "../../lib/types/ipc-channels";
import {LargeIcon} from "../common/styled-componets";
import warn from "../../assests/icon/warn.svg"
import {useEffect, useState} from "react";


const ItemContainer = styled.div`
  width:100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export interface MsgProp {
    msg: string
    type: MsgType
}

function MsgItem(props: MsgProp) {
    return (
        <ItemContainer>
            <LargeIcon src={warn}/>
            <span>{props.msg}</span>
        </ItemContainer>
    )
}

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

export function MsgList() {
    const [list, setList] = useState<Array<MsgProp>>([])




    return (
        <>
            {
                list.length != 0 && (
                    <Container>
                        {list.map(e =>
                            <MsgItem key={e.msg} msg={e.msg} type={e.type}/>
                        )}

                    </Container>
                )
            }
        </>
    )
}