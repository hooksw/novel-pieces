import styled from "styled-components";

const BaseIcon=styled.img`
    filter: brightness(${p=>p.theme.isLight?0:100});
`

export const SIcon = styled(BaseIcon)`
    width:0.8rem;
    height:0.8rem;
`
export const MIcon = styled(BaseIcon)`
    width:1.2rem;
    height:1.2rem;
`
export const LIcon = styled(BaseIcon)`
    width:2rem;
    height:2rem;
`