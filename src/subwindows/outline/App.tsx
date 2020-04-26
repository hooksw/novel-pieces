import * as React from "react";
import {useObservable} from "rxjs-hooks";
import {data$} from "./subject";


export function App() {
    const outline=useObservable(()=>data$)


    return(
        <div></div>
    )
}