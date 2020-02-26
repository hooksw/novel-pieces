import {Events} from "../observer-events";
import {useEffect, useState} from "react";
import {observer} from "../Observer";
//dataBinding hooks
type Trans = (e: any) => any

export function useBind<T>(event: Events, init: any, trans: Trans = (e) => e) {
    const [value, setValue] = useState<T>(init)

    useEffect(() => {
        observer.setTrigger(event, e => {
            setValue(trans(e))
        })
        return () => {
            observer.removeTrigger(event)
        }
    }, [])
    return value;
}