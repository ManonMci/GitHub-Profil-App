import { useContext } from "react";
import { ThemeContext } from "../context/DarkMode";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
    body, .mode-button, .light-button {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? '#141D2F' : "#F6F8FF"}; 
    }
    .devFinder, .td-value, h1, .p-devFinder{
        color: ${({ isDarkMode }) =>
        isDarkMode ? 'white' : "black"}; 
    }
    .card, form, input {
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#1E2A47' : "white"}; 
        box-shadow: ${({ isDarkMode }) =>
        isDarkMode ? 'none' : "#FFFFFF"}; 
    }
    p, li, input, td{
        color : ${({ isDarkMode }) =>
        isDarkMode ? '#FFFFFF' : "#697C9A"};
    }
    table,{
        background-color: ${({ isDarkMode }) =>
        isDarkMode ? '#141D2F' : "F6F8FF"}; 
    }
`

function GlobalStyle() {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode= {theme === "dark"} />;
}

export default GlobalStyle;
