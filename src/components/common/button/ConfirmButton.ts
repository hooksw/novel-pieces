import styled from "styled-components";
import {design} from "../design";

export const ConfirmButton = styled.button`
    min-height:2rem;
    border-radius:${design.radius};
    padding:0px ${design.space_s};
    outline: none;
    border: none;
    background:${p=>p.theme.point};
    color:${p=>p.theme.text};
    user-select:none;
    &:hover{
        box-shadow:${design.shadow_s};
    }
    &:active{
        font-size: 75%;
    }
    transition: all 0.25s ;
`
