import ipcRenderer = Electron.ipcRenderer;
import {WindowProp} from "../WindowProp";
import {BehaviorSubject} from "rxjs";
import produce from "immer";


let asyncMethod:(e:any)=>void

export const  data$=new BehaviorSubject(null)

ipcRenderer.once('outline-init',(e,a:WindowProp)=>{
    data$.next(a.data)
    asyncMethod=a.method
})

export function updateData(callback:(e:any)=>void) {
    if(data$.value==null) return;
    const data= produce(data$.value,i=>{
            callback(i)
        })
    data$.next(data)
    if(asyncMethod){
        asyncMethod(data)
    }
}
