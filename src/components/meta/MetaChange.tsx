import {SPanel} from "../../common components/container/Panel";
import {panelsContainer} from "../panels/PanelsContainer";
import * as React from "react";

export function MetaChange() {

    return(
        <SPanel onClose={()=>panelsContainer.delete(key)}>

        </SPanel>
    )
}
const key='meta change'