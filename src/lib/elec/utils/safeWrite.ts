import * as fs from "fs-extra"

export async function safeWrite(path:string,data:string) {
    fs.open(path,'w',async (err,fd)=>{
        if(err){
            await fs.writeFile(path,data,"utf8")
            await fs.close(fd)
        }else{
            const tmp=path+".tmp"
            await fs.writeFile(tmp,data,"utf8")
            await fs.close(fd)
            await fs.unlink(path)
            await fs.rename(tmp,path)
        }
    })
}
