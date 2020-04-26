import styled from "styled-components";
import {design} from "../design/design";

export const ConfirmButton = styled.button`
    min-height:2rem;
    border-radius:8px;
    padding:0 ${design.space_l};
    outline: none;
    border: none;
    background:${p => p.theme.point};
    color:${p => p.theme.point_text};
    user-select:none;
    &:hover{
        box-shadow:${design.shadow_s};
    }
    &:active{
        font-size: 75%;
    }
    transition: all 0.25s ;
`
