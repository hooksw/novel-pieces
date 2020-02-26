import {Events} from "../observer-events";
import {useState} from "react";
import {observer} from "../Observer";

export function useBindObs<T>(event:Events,init:T|(()=>T)) {
    const [obs,setObs]=useState<T>(init)
    observer.trigger(event,init)

    function trigger(e:T){
        setObs(e)
        observer.trigger(event,e)
    }
    return [obs,trigger] as const
}
