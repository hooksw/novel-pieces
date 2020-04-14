const isDebug=true

export function log(msg:any,type?:string) {
    if(isDebug){
        if(type){

            console.log(type+':'+msg)
        }else{
            console.log(msg)
        }
    }
}