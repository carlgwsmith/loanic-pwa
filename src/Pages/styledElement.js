import styled from "styled-components";

export const GlossaryContainer = styled.div`
  display: grid; 
  grid-template-columns: .1fr 1fr ; 
  gap: 20px 20px;
  padding: 30px;
  grid-template-areas:
    "Alpha Define";
`

export const Alpha = styled.div`
grid-area: Alpha;
text-align:left;
line-height: 2;
`
export const Define = styled.div`
grid-area: Define;
text-align:left;
line-height: 2;
`