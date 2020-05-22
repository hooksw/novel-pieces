import React = require("react");
import {PanelsControl} from "./panels/PanelsControl";
import {ContextMenuControl} from "./ContxetMenuControl";
import {MsgList} from "./msg/MsgList";
import {Launch} from "./launch/Launch";

export function AllOverInterface() {
    return (
        <>
            <Launch/>
            <PanelsControl/>
            <ContextMenuControl/>
            <MsgList/>
        </>
    )
}