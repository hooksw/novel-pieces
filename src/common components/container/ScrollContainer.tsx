import styled from "styled-components";


export const ScrollContainer = styled.div`
  overflow: auto;
  &::-webkit-scrollbar{
    width:1rem;
    display: inline-block;
  };
  &::-webkit-scrollbar-thumb {
     background-color: ${p=>p.theme.scrollbar};
     border-radius: 1rem;
  };
`