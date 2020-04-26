import {useEffect} from "react";
import {hiddenAllMenu} from "../../lib/browser/subjects/ui/menuContext";


export function MenuHide() {
    //contextMenu Hide
    useEffect(() => {
        document.addEventListener('click', hiddenAllMenu)
        document.addEventListener('scroll', hiddenAllMenu)
        return () => {
            document.removeEventListener('click', hiddenAllMenu)
            document.removeEventListener('scroll', hiddenAllMenu)
        }
    })
    return null
}