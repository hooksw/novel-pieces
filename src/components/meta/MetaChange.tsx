import {SPanel} from "../common/container/Panel";
import {panelsManager} from "../panels/PanelsManager";
import * as React from "react";

export function MetaChange() {

    return(
        <SPanel onClose={()=>panelsManager.delete(key)}>

        </SPanel>
    )
}
const key='meta change'