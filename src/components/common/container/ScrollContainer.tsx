import styled from "styled-components";

interface Props {
    isScrollDec:boolean
}

export const ScrollContainer = styled.div<Props>`
  overflow: auto;
  &::-webkit-scrollbar{
    width:1rem;
    display: inline-block;
  };
  &::-webkit-scrollbar-thumb {
     background-color: ${p=>p.isScrollDec?p.theme.dec:p.theme.main};
     border-radius: 1rem;
  };
`