import {NodeType, Outline} from "./NodeType";

const gen = (c: NodeType[]) => {
    const arr=[]
    for(let i=0;i<10;i++){
        const n= {
            value: '0.5',
            key: Math.random() + '',
            children: c
        }
        arr.push(n)
    }
    return arr

}


const arr: any = gen(gen([]))
export const defaultOutline: Outline = {
    nodes: [{
        x: 300,
        y: 300,
        node: {
            value: '000',
            key: 'ppp',
            children: arr
        }

    }],
    closeKeys: []
}