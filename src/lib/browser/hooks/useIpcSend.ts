import {useEffect} from "react";
import ipcRenderer = Electron.ipcRenderer;

export function useIpcSend(channel:string,depend:any[]|null=[],arg:any) {
    useEffect(()=>{
        ipcRenderer.send(channel,arg)
    },depend)
}