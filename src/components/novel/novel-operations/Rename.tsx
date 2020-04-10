import {SPanel} from "../../../common components/container/Panel";
import * as React from "react";
import {SimpleInput} from "../../../common components/input/SimpleInput";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {closeCurPanel} from "../../../lib/browser/subjects/ui/panels";
import {novelManager$} from "../../../lib/browser/subjects/Novel Manager";

export function Rename(props:{
    oldName:string
    pos:number[]
    onConfirm:(e:string)=>void
    title?:string
}) {
    let v=""

    function clickHandle() {
        if(novelManager$.getValue().checkChildrenNameExist(props.pos,v)||v==props.oldName){

        }else{
            props.onConfirm(v)
            closeCurPanel()
        }
    }

    return(
        <SPanel title={props.title}  >
            <SimpleInput placeholder='file name'
                         onChange={e => v = e.target.value}
                         defaultValue={props.oldName}
            />
            <ConfirmButton onClick={clickHandle}>add</ConfirmButton>
        </SPanel>
    )
}
