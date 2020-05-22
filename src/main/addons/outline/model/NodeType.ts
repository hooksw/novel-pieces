
export interface Pos {
    x:number
    y:number
}

export type NodeKey=string
export interface NodeType {
    key:NodeKey
    value:string
    children:NodeType[]
}

export interface MainNodeType extends Pos{
    node:NodeType
}
export interface Outline {
    nodes:MainNodeType[]
    closeKeys:NodeKey[]
}

