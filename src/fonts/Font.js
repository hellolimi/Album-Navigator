import { createGlobalStyle } from "styled-components";
import OswaldLight from "./oswald-v36-latin-300.woff";
import OswaldRegular from "./oswald-v36-latin-regular.woff";
import OswaldSemiBold from "./oswald-v36-latin-600.woff";
import NotoSans from "./noto-sans-kr-v13-latin-regular.woff";

export default createGlobalStyle`
    @font-face {
        font-family: "Oswald";
        src: local("Oswald"),
        url(${OswaldLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: "Oswald";
        src: local("Oswald"),
        url(${OswaldRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: "Oswald";
        src: local("Oswald"),
        url(${OswaldSemiBold}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "NotoSans";
        src: local("NotoSans"),
        url(${NotoSans}) format('woff');
        font-weight: 400;
        font-style: normal;
    }
`;