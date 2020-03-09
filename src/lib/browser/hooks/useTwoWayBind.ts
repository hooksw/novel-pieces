import {Events} from "../observer-events";
import {useEffect, useState} from "react";
import {observer} from "../Observer";

export function useTwoWayBind<T>(event:Events,init:T|(()=>T)) {
    const [obs,setObs]=useState<T>(init)
    observer.trigger(event,init)
    useEffect(() => {
        observer.setTrigger(event, e => {
            setObs(e)
        })
        return () => {
            observer.removeTrigger(event)
        }
    }, [])
    function trigger(e:T){
        observer.trigger(event,e)
    }
    return [obs,trigger] as const
}
