import {bindTrigger} from "./hooks/bindTrigger";
import {Events} from "./observer-events";

export async function initWorkbench(dir: string) {
    const settings:Array<[Events,any]>=[
        [Events.newnovel_show,false],
        [Events.welcomepage_show,false],
        [Events.dir_data,dir]
    ]
    settings.forEach(e=>{
        bindTrigger(e[0],e[1])
    })
}