
export class Model<T> {
    init: T
    updateMethod: (e: ((pre:T)=>T)|T) => void


    set(arg: ((pre:T)=>T)|T) {
        if (this.updateMethod) {
            this.updateMethod(arg)
        }else{
            const isFun=typeof arg =='function'
            if(!isFun) this.init=arg as T
        }
    }
}


export function model<T>():Model<T> {
    return new Model<T>()
}

class ShowModel extends Model<boolean>{
    toggle(){
        super.set(e=>!e)
    }
}
export function showModel(){
    return new ShowModel()
}

class MapModel<T,K> extends Model<Map<T,K>>{
    add(key:T,value:K){
        super.set(e=>{
            e.set(key,value)
            return new Map([...e])
        })
    }
    delete(key:T){
        super.set(e=>{
            e.delete(key)
            return new Map([...e])
        })
    }
}

export function mapModel<T,K>() {
    return new MapModel<T,K>()
}

class ArrayModel<T> extends Model<Array<T>>{
    add(v:T){
        super.set(e=>{
            e.push(v)
            return new Array<T>(...e)
        })
    }
}

export function arrayModel<T>() {
    return new ArrayModel<T>()
}


