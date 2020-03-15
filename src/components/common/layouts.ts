import styled from 'styled-components';
import {design} from "./design";
//define basic components style in layout and base colors like shadow,when used ,they need  to be colored based on theme
export const FullScreen = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
`
export const Background=styled(FullScreen)`
    background: rgba(255,255,255,0.5);
    z-index: ${design.z_bg};
`
export const FlexRow=styled.div`
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const FlexCol=styled.div`
    flex-flow: column nowrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const FlexColStart=styled.div`
    flex-flow: column nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const FlexRowStart=styled.div`
    flex-flow: row nowrap;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const FlexRowBetw=styled.div`
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const FlexColBetw=styled.div`
    flex-flow: column nowrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Center=styled.div`
    flex-flow: row nowrap;
    display: flex;
    justify-content: center;
    align-items: center;
`