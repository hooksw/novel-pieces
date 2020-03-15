import styled from "styled-components";
import {design} from "./design";

export const Text=styled.p`
  line-height: 145%;
  margin: 0 ${design.space_s};
`
export const Legend=styled(Text)`
  font-size:125% ;
`
export const Title = styled.span`
  text-align:center;
  padding:${design.space_s} 0px;
`
export const Link=styled.a`
  text-decoration: underline ${p=>p.theme.point};
  color: ${p=>p.theme.point};
`