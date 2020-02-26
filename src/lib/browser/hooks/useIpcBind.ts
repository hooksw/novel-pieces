import {Channels} from "../../types/ipc-channels";
import {useEffect} from "react";
import ipcRenderer = Electron.ipcRenderer;

export function useIpcBind(
    channel: string,
    sendData: any = null,
    callback: (...args: any[]) => void,
    once: boolean = false
) {
    useEffect(() => {
        ipcRenderer.send(channel, sendData)
        if (once) {
            ipcRenderer.once(channel, (e, a) => {
                callback(a)
            })
        } else {
            ipcRenderer.on(channel, (e, a) => {
                callback(a)
            })
        }
        return () => {
            ipcRenderer.removeListener(channel, callback)
        }
    }, [])
}