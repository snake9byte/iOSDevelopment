import { createGlobalStyle } from "styled-components";
import { useThemeContext } from "../Theme";
import { hexToRgba } from "../../utils";
import icons_svg from "../../fonts/zui_ui_icon.svg";
import icons_ttf from "../../fonts/zui_ui_icon.ttf";
import icons_woff from "../../fonts/zui_ui_icon.woff";
import icons_woff2 from "../../fonts/zui_ui_icon.woff2";
import "../../fonts/icons.css";

export const Styles = () => {
  const { theme } = useThemeContext();
  return <CSS theme={theme} />;
};

const CSS = createGlobalStyle`
  ${({ theme }) => {
    let rules = "";
    let customMedia = "";
    const sizes = ["sm", "md", "lg", "xl"];

    for (const key in theme) {
      if (typeof theme[key] !== "string") {
        for (const childKey in theme[key]) {
          rules += `--ZUI-${key}_${childKey}: ${theme[key][childKey]};`;
        }
      }
    }

    sizes.forEach((size) => {
      customMedia += `--ZUI-media_${size} (min-width: ${theme.break_points[size]});`;
    });

    return `
      :root {
        ${rules}
      }

      ${customMedia}

      @font-face {
          font-family: 'zui_ui';
          src:  url('${icons_woff2}') format('woff2'),
                url('${icons_woff}') format('woff'),
                url('${icons_ttf}') format('truetype'),
                url('${icons_svg}"#webfont"}') format('svg');
          font-weight: normal;
          font-style: normal;
      }

      body {
        font-family: var(--ZUI-fonts_sans);
        background-color: var(--ZUI-colors_background);
        color: var(--ZUI-colors_text);
      }

      @keyframes ZUI-loading-type1 {
        0% {
          transform: translate(0px, 150%);
        }
        50% {
          transform: translate(300%, 150%);
        }
        99% {
          transform: translate(0px, 150%);
        }
      }

      @keyframes ZUI-loading-type2 {
        0% {
          opacity: 1;
        }
        50% {
          opacity: .2;
        }
        99% {
          opacity: .9;
        }
      }

      @keyframes ZUI-loading-type3a {
        0% {
          transform: translate(700%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(700%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(700%, 150%);
          opacity: .5;
        }
      }

      @keyframes ZUI-loading-type3b {
        0% {
          transform: translate(945%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(945%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(945%, 150%);
          opacity: .5;
        }
      }

      @keyframes ZUI-loading-type3c {
        0% {
          transform: translate(1190%, 150%);
          opacity: .5;
        }
        50% {
          transform: translate(1190%, 50%);
          opacity: 1;
        }
        99% {
          transform: translate(1190%, 150%);
          opacity: .5;
        }
      }

      @keyframes ZUI-loading-type4 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(359deg);
        }
      }

      dialog {
        background-color: ${hexToRgba(theme.colors.background, 0.5)};
        border: 0 none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        max-width: 100%;
        max-height: 100%;
      }
    `;
  }}
`;
