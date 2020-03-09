import styled from "styled-components";

export const TextButton=styled.span`
  color:${p=>p.theme.point};
  &:hover{
    text-decoration: underline ${p=>p.theme.point};
  }
  user-select: none;
`