import React = require("react");
import {mapModel} from "../../lib/browser/model/Model";
import {useModel} from "../../lib/browser/model/useModel";
import {Background} from "../common/layouts";

export const panelsManager = mapModel<string,JSX.Element>()

export function PanelsManager() {
    const [map] = useModel(panelsManager, new Map())
    const isNotEmpty = map.size > 0
    const [...panels]=map.values()
    return (
        <>
            {isNotEmpty && <Background>
                {panels}
            </Background>}
        </>
    )
}