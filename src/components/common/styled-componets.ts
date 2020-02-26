import styled from 'styled-components';
//define basic components style in layout and base colors like shadow,when used ,they need  to be colored based on theme
export const FullScreen = styled.div`
    width: 100vw;
    height: 100vh;
    position:fixed;
    top:0;
    left:0;
`
export const SmallIcon = styled.img`
    width:1.2rem;
    height:1.2rem;
`
export const MediumIcon = styled.img`
    width:2rem;
    height:2rem;
`
export const LargeIcon = styled.img`
    width:3rem;
    height:3rem;
`
export const BaseButton = styled.button`
    min-height:2rem;
    border-radius:2px;
    padding-left:16px;
    padding-right:16px;
    outline: none;
    border: none;
    background:${p=>p.theme.decoration};
    color:${p=>p.theme.appTxt};
    user-select:none;
    &:hover{
        box-shadow: 3px 3px 3px #ccc;
    }
`