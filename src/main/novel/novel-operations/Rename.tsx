import {SPanel} from "../../../common components/container/Panel";
import * as React from "react";
import {SimpleInput} from "../../../common components/input/SimpleInput";
import {ConfirmButton} from "../../../common components/button/ConfirmButton";
import {closeCurPanel} from "../../over-interface/model/panels";
import {checkNameExist} from "../../../lib/browser/model/novel";
import {Confirm} from "./common operations";
import {Array0or1, Array1or2} from "../../../lib/interface/common";

export function Rename(props:{
    oldName:string
    parent:number|undefined
    onConfirm:Confirm
    title?:string
}) {
    let v=""

    function clickHandle() {
        if(checkNameExist(props.parent,v)||v==props.oldName){

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
