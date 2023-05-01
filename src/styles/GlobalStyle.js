import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import { variables } from "./variables";

export const GlobalStyle = createGlobalStyle`

${variables}

body {
  margin: 0;
  font-family: "Montserrat";
  background-color: var(--bg);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {text-decoration: none;}
`;
