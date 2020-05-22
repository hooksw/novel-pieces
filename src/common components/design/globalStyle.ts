import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

body,html{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
}
p,span{
  line-height: 1.2;
}

.adjust{
  width: inherit;
  height: inherit;
}
`