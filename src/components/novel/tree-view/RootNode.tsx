import {ExpandNode} from "../../../common components/tree/ExpandNode";
import * as React from "react";
import {Menu} from "../../../lib/interface/MenuContext";
import {addChild} from "../novel-operations/common operations";

const rootMenuBuilder = ( pos:number[],name: string):Menu => {
    return [
        addChild(pos,name,'add part')
    ]
}

export function RootNode(props: {
    children?: any
    name: string
}) {
    return (
        <ExpandNode menuBuilder={() => rootMenuBuilder([],props.name)} indent={0} name={props.name}
                    expanded={true}>
            {props.children}
        </ExpandNode>
    )
}