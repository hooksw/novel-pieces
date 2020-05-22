import {ExpandNode} from "../../../common components/tree/ExpandNode";
import * as React from "react";
import {Menu} from "../../../lib/interface/ContextMenuTYpe";
import { addPartPanel} from "../novel-operations/common operations";

const rootMenuBuilder = ( name: string):Menu => {
    return [
        addPartPanel(name,'add part')
    ]
}

export function RootNode(props: {
    children?: any
    name: string
}) {
    return (
        <ExpandNode menuBuilder={() => rootMenuBuilder(props.name)} indent={0} name={props.name}
                    expanded={true}>
            {props.children}
        </ExpandNode>
    )
}