import * as React from 'react'
import styled from 'styled-components'
import {Novel} from "../../../lib/types/project";
import {PartNode} from "./PartNode";
import {ChapterNode} from "./ChapterNode";
import {SectionNode} from "./SectionNode";
import {ScrollContainer} from "../../common/container/ScrollContainer";

const Container = styled(ScrollContainer)`
    min-width:20rem;
    height:100%;
    position: relative;
`


const nameTrans = (name: string) => name.trim().length == 0 ? "untitled" : name

export function TreeView(props: {
    novel: Novel
    cur: Array<number>
}) {
    // const [menu, setMenu] = useState<Menu>(null)
    // const [menuPos,setMenuPos]=useState<Pos>(null)
    //
    // const menuChange:MenuChange=(m,pos)=>{
    //     setMenuPos(pos)
    //     setMenu(m);
    // }
    const cur = props.cur

    return (
        // <MenuContext.Provider value={menuChange}>
        <Container forPanel={true}>
            {props.novel.content.map((e0, i0) => <PartNode depth={[i0]} key={e0.name} name={nameTrans(e0.name)}
                                                           expanded={i0 === cur[0]}>
                {e0.content.map((e1, i1) => <ChapterNode depth={[i0, i1]} key={e1.name} name={nameTrans(e1.name)}
                                                         expanded={i0 === cur[0] && i1 === cur[1]}>
                    {e1.content.map((e2, i2) => <SectionNode depth={[i0, i1, i2]} key={e2.name}
                                                             name={nameTrans(e2.name)}
                                                             selected={i0 === cur[0] && i1 === cur[1] && i2 == cur[2]}/>)}
                </ChapterNode>)}
            </PartNode>)}
            {/*{(menu != null) && (<ContextMenu  menu={menu} bg="app" pos={menuPos}/>) }*/}
        </Container>

        // </MenuContext.Provider>

    )
}

// export const MenuContext=React.createContext<MenuChange>(null)
// type MenuChange =(e:Menu,pos:Pos)=>void