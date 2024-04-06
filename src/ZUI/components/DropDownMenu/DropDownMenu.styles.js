import styled from "styled-components";
import { hexToRgba } from "../../utils";

export const DropDownMenuUI = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${({ theme }) => hexToRgba(theme.colors.background, 0.2)};
  z-index: 1;
`;

export const MenuWrapper = styled.section`
  position: absolute;
  ${({ position }) => {
    const windowHeight = window.innerHeight;
    let styles = "";
    if (windowHeight - position.y > 300) styles += `top: ${position.y}px;`;
    else styles += `bottom: ${windowHeight - position.y - position.height}px;`;
    return styles;
  }}
  max-height: 300px;
  overflow: auto;
  left: ${({ position }) => `${position.x}px`};
  background-color: var(--ZUI-colors_gray_1);
  list-style: none;
  box-shadow: var(--ZUI-shadows_gray);
  width: ${({ position }) => `${position.width}px`};
`;
