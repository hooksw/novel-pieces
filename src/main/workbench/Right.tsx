import {EditorManager} from "../novel/editor/EditorManager";
import * as React from "react";
import {useObservable} from "rxjs-hooks";
import {uuid$} from "../../lib/browser/subjects/ui/cur";
import {FlexRow} from "../../common components/layouts";
import {AsideBar} from "./aside/AsideBar";
import styled from "styled-components";

const Container=styled(FlexRow)`
    width: inherit;
    height: inherit;
    .right{
      flex: 1;
      width:auto ;
      height: inherit;
    }
`

export function Right() {
   const uuid=useObservable(()=>uuid$)

   return(
       <Container>
            <AsideBar/>
            <div className='right'>
                <EditorManager uuid={uuid}/>
            </div>
       </Container>
   )
}