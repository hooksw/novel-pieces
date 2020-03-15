import React = require("react");
import {MsgList} from "./MsgList";
import {NewNovel} from "./NewNovel";
import {Welcome} from "./Welcome";
import {Launch} from "./launch/Launch";
import {showModel} from "../../lib/browser/modle/Model";
import {useModel} from "../../lib/browser/modle/useModel";

export const mWelcomeShow=showModel()
export const mNewNovelShow=showModel()
export const mLaunchShow=showModel()


export  function ActivityManager() {
    const [welcomeShow]=useModel(mWelcomeShow,false)
    const [newNovelShow]=useModel(mNewNovelShow,false)
    const [launchShow]=useModel(mLaunchShow,true)
    return(
        <>
            {welcomeShow&&<Welcome/>}
            {newNovelShow&&<NewNovel/>}
            {launchShow&&<Launch/>}
            <MsgList/>
        </>
    )
}