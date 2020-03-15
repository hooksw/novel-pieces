import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const TextButton=styled(BaseButton)`
  color:${p=>p.theme.point};
  &:hover{
    text-decoration: underline ${p=>p.theme.point};
  }
`