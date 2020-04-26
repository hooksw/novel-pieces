import {SPanel} from "../../../common components/container/Panel";
import * as React from "react";
import {SimpleInput} from "../../../common components/input/SimpleInput";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {closeCurPanel} from "../../../lib/browser/subjects/ui/panels";
import {checkNameExist} from "../../../lib/browser/subjects/project-data/novel";
import {Confirm} from "./common operations";
import {Array0or1, Array1or2} from "../../../lib/interface/common-types";

export function Rename(props:{
    oldName:string
    pos:Array1or2<number>
    onConfirm:Confirm
    title?:string
}) {
    let v=""

    function clickHandle() {
        if(checkNameExist(props.pos.slice(0,-1) as Array0or1<number>,v)||v==props.oldName){

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
