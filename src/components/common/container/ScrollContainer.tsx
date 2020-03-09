import styled from "styled-components";

interface Props {
    forPanel:boolean
}

export const ScrollContainer = styled.div<Props>`
  overflow: auto;
  &::-webkit-scrollbar{
    width:1rem;
    display: inline-block;
  };
  &::-webkit-scrollbar-thumb {
     background-color: ${p=>p.forPanel?p.theme.panel:p.theme.content};
     border-radius: 1rem;
  };
`