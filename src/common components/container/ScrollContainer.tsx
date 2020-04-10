import styled from "styled-components";


export const ScrollContainer = styled.div`
  overflow: auto;
  &::-webkit-scrollbar{
    width:1rem;
    display: inline-block;
  };
  &::-webkit-scrollbar-thumb {
     background-color: ${p=>p.theme.isLight?'rgba(0,0,0,0.5)':'rgba(255,255,255,0.5'};
     border-radius: 1rem;
  };
`