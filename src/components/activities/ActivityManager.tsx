import React = require("react");
import {MsgList} from "./MsgList";
import {NewNovel} from "./NewNovel";
import {useBind} from "../../lib/browser/hooks/useBind";
import {Events} from "../../lib/browser/observer-events";
import {Welcome} from "./Welcome";
import {Launch} from "./launch/Launch";

export  function ActivityManager() {
    const welcomeShow=useBind(Events.welcomePage_show,false)
    const newNovelShow=useBind(Events.newNovel_show,false)
    const launchShow=useBind(Events.launch_show, true)
    return(
        <>
            {welcomeShow&&<Welcome/>}
            {newNovelShow&&<NewNovel/>}
            {launchShow&&<Launch/>}
            <MsgList/>
        </>
    )
}