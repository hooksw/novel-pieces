import {Events} from "../observer-events";
import {observer} from "../Observer";

export function bindTrigger(event:Events,e?:any) {
        observer.trigger(event,e)

}