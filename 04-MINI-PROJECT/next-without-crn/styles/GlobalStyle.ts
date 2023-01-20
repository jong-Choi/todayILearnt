import { createGlobalStyle } from "styled-components";
import GlobalFontFamily from "./GlobalFontFamily";
import GlobalResetStyle from "./GlobalResetStyle";

const GlobalStyle = createGlobalStyle`
${GlobalResetStyle}
${GlobalFontFamily}
  `;

export default GlobalStyle;
