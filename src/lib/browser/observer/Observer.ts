

class Observer {
    private store = new Map<string, Function[]>()
    private temp=new Map<string,any>()
    
    reg(name:string, f:Function) {
        if(this.store.has(name)){
            this.store.get(name).push(f)
        }else{
            this.store.set(name,[f])
        }

        this.empty()
    }

    send(name: string, arg:any,force:boolean=true) {
        if (this.store.has(name)) {
            this.store.get(name).forEach(f=>f(arg))
            // this.temp.delete(name)
        } else if(force){
            this.temp.set(name, arg)
        }
        console.log("send:" + this.store.size + ";" + this.temp.size)
    }
    unReg(name: string) {
        this.store.delete(name)
    }

    private empty() {
        this.temp.forEach((v, k, m) => {
            if (this.store.has(k)) {
                this.store.get(k).forEach(f=>f(v))
                m.delete(k)
            }
        })
    }
}

export const observer = new Observer()