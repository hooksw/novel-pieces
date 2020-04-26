
export type NodeKeyType=string

export interface Pos {
    x:number
    y:number
}

export interface NodeWithPos extends Pos{
    node:NodeType
}

export interface NodeType {
    key:NodeKeyType
    value:string
    children:NodeType[]
}

export type MindMap = NodeWithPos[]
