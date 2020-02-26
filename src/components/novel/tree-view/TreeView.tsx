import * as React from 'react'
import styled from 'styled-components'
import {PartData} from "../../../lib/types/novel";
import {ExpandNode} from "../../common/ExpandNode";
import part from "../../../assests/icon/part.svg"
import chapter from "../../../assests/icon/chapter.svg"
import section from "../../../assests/icon/section.svg"
import {TreeNode} from "../../common/TreeNode";
import {SmallIcon} from "../../common/styled-componets";
import {useBindObs} from "../../../lib/browser/hooks/useBindObs";
import {Events} from "../../../lib/browser/observer-events";

const Container = styled.div`
    min-width:20rem;
    height:100%;
    position: relative;
`

const list: PartData[] = [
    {
        name: "",
        content: [{
            name: "",
            content: [{
                name: "",
                uuid: "firstSectionUUID"
            }]
        }]
    }
]

const nameTrans = (name: string) => name.trim().length == 0 ? "untitled" : name

export function TreeView() {
    // const [menu, setMenu] = useState<Menu>(null)
    // const [menuPos,setMenuPos]=useState<Pos>(null)
    //
    // const menuChange:MenuChange=(m,pos)=>{
    //     setMenuPos(pos)
    //     setMenu(m);
    // }

    const [cur,curObs]=useBindObs<Array<number>>(Events.curnovel_data,[0,0,0] )

    return (
        // <MenuContext.Provider value={menuChange}>
        <CurContext.Provider  value={curObs}>
            <Container>
                {list.map((e0,i0) => <ExpandNode key={e0.name} indent={0} name={nameTrans(e0.name)} icon={<SmallIcon src={part}/>}
                                           expanded={i0===cur[0]}>
                    {e0.content.map((e1,i1) => <ExpandNode key={e1.name} indent={1} name={nameTrans(e1.name)} icon={<SmallIcon src={chapter}/>}
                                                    expanded={i0===cur[0]&&i1===cur[1]}>
                        {e1.content.map((e2,i2) => <TreeNode key={e2.name} indent={2} front={<SmallIcon src={section}/>}
                                                      name={nameTrans(e2.name)} selected={i0===cur[0]&&i1===cur[1]&&i2==cur[2]} />)}
                    </ExpandNode>)}
                </ExpandNode>)}
                {/*{(menu != null) && (<ContextMenu  menu={menu} bg="app" pos={menuPos}/>) }*/}
            </Container>
        </CurContext.Provider>

        // </MenuContext.Provider>

    )
}
export const CurContext=React.createContext(null)

// export const MenuContext=React.createContext<MenuChange>(null)
// type MenuChange =(e:Menu,pos:Pos)=>void