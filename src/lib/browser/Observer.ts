import {Events} from "./observer-events"

type Fun = (e?: any) => void

class Observer {
    private listeners = new Map<Events, Fun[]>()
    private triggerQuene: Map<Events, any | null> = new Map()

    setTrigger(channel: Events, fun: Fun) {
        if(this.listeners.has(channel)){
            this.listeners.get(channel).push(fun)
        }else{
            this.listeners.set(channel,[fun])
        }
        this.triggerAll()
        console.log("set:" + this.listeners.size + ";" + this.triggerQuene.size)
    }

    trigger(channel: Events, e: any = null) {
        if (this.listeners.has(channel)) {
            this.listeners.get(channel).forEach(f=>f(e))
            this.triggerQuene.delete(channel)
        } else {
            this.triggerQuene.set(channel, e)
        }
        console.log("trigger:" + this.listeners.size + ";" + this.triggerQuene.size)
    }

    removeTrigger(channel: Events) {
        this.listeners.delete(channel)
    }

    private triggerAll() {
        this.triggerQuene.forEach((v, k, m) => {
            if (this.listeners.has(k)) {
                this.listeners.get(k).forEach(f=>f(v))
                m.delete(k)
            }
        })
    }
}

export const observer = new Observer()