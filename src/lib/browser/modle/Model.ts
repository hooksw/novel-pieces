
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

class ShowModel extends Model<boolean>{
    toggle(){
        super.set(e=>!e)
    }
}

export function showModel(){
    return new ShowModel()
}

export function model<T>():Model<T> {
    return new Model<T>()
}

