import {useEffect, useState} from "react";
import {observer} from "./Observer";

//dataBinding hooks
export function useBind<T>(name:string,arg:T) {
    const [value, setValue] = useState<T>(arg)

    useEffect(() => {
        observer.reg(name, setValue)
        return () => {
            observer.unReg(name)
        }
    }, [])
    return value;
}