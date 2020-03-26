import {useState} from "react";
import {Model} from "./Model";

export function useModel<T>(m: Model<T>,init:T) {
    const value:T=m.init?m.init:init
    const [state, setState] = useState<T>(value)
    m.updateMethod = setState

    return [state, setState] as const
}