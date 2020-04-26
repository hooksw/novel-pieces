import {useObservable} from "rxjs-hooks";
import {maskShow$} from "../../lib/browser/subjects/ui/show";
import styled from "styled-components";
import {FullScreen} from "../../common components/layouts";
import {design} from "../../common components/design/design";
import * as React from "react";

const BG = styled(FullScreen)`
  z-index: ${design.z_mask};
`

export function Mask() {
    const show = useObservable(() => maskShow$)
    return (
        <>
            {show && <BG/>}
        </>
    )
}