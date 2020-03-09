import styled from "styled-components";

export const ConfirmButton = styled.button`
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
    &:active{
        font-size: 75%;
    }
    transition: all 0.25s ;
`
