import {bindTrigger} from "../browser/hooks/bindTrigger";
import {Events} from "../browser/observer-events";
import {getProject} from "../node/novel/getProject";
import {ProjectIO, setProjectIO} from "./ProjectIO";

export async function initWorkbench(dir: string) {
    setProjectIO(new ProjectIO(dir))
    const settings:Array<[Events,any]>=[
        [Events.newnovel_show,false],
        [Events.welcomepage_show,false],
        [Events.project_data,getProject()]
    ]
    settings.forEach(e=>{
        bindTrigger(e[0],e[1])
    })
}