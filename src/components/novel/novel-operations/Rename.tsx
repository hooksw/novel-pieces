import {SPanel} from "../../common/container/Panel";
import * as React from "react";
import {panelsManager} from "../../panels/PanelsManager";

export function Rename(props:{
    pos:number[]
    onFinish:(e:string)=>void
}) {


    return(
        <SPanel onClose={()=>panelsManager.delete(key)}>

        </SPanel>
    )
}
export const key='rename'