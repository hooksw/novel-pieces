class M {
    a;
    async init(){
        await new Promise((rs,rj)=>{
            rs(1)
            console.log('log')
        })
    }
    constructor(b) {
        this.init().then(e=>this.a=e)
    }
}
var b=new M(3)
console.log(b.a)