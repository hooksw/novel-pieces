export function _throttle(time: number, fun: Function) {
    let processing: boolean = false
    return () => {
        if (!processing) {
            fun()
            setTimeout(() => {
                processing = true
            }, time)
        }
    }
}