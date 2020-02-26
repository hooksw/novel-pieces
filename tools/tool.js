//generate enum Channels, not for production
let doubleChannelsName=[
    "checkfirst",
    "novellist",
    "getMeta",
    "updatemeta",
    "getnovel",
    "updatenovel",
    "getconfig",
    "updateconfig"
]

function createChannels(){
    let t={msg:"msg"}
    let i=0;
    doubleChannelsName.forEach(v=>{
        t["ask_"+v]=""+i++
        t["reply_"+v]=""+i++
    })
    return t;
}
console.log((JSON.stringify(createChannels())).replace(RegExp(`":`,"g"),"=").replace(RegExp(`,"`,"g"),",\n").replace(`{"`,"{"))