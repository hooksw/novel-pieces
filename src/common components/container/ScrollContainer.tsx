import styled from "styled-components";


export const ScrollContainer = styled.div`
  overflow: auto;
  &::-webkit-scrollbar{
    width:16px;
    display: inline-block;
  };
  &::-webkit-scrollbar-thumb {
     background-color: ${p=>p.theme.scrollbar};
  };
`