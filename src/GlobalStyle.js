import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

export const Globalstyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-image: url("${background}");
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
`;