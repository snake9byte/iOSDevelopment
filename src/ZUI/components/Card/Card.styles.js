import styled from "styled-components";
import { hexToRgba } from "../../utils";

export const CardUI = styled.div`
  padding: ${({ gap }) => `var(--ZUI-sizes_spacing_${gap})`};
  ${({ color }) => color !== "gray" && "color: #fff;"}
  ${({ variant, color }) => {
    const tone = color === "gray" ? [1, 3] : [3, 4];
    if (variant === "bordered") {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_${tone[0]});
        border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_${tone[1]});`;
    } else if (variant === "dense") {
      return `
        background-color: var(--ZUI-colors_${color}_${tone[0]});`;
    } else {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        background-color: var(--ZUI-colors_${color}_${tone[0]});
        ${color === "gray" && "box-shadow: var(--ZUI-shadows_" + color + ");"}`;
    }
  }}
  ${({ pointer }) => pointer && `cursor: pointer;`}
  overflow: hidden;
  position: relative;
  transition: all var(--ZUI-transitions_fast) ease;

  &:hover {
    ${({ clickable }) =>
      clickable &&
      `
      transform: translate(var(--ZUI-sizes_spacing_0), calc(var(--ZUI-sizes_spacing_2) * -1));
      cursor: pointer;`}
  }
`;

export const HeaderUI = styled.header`
  margin: ${({ state }) =>
    `calc(var(--ZUI-sizes_spacing_${
      state.gap
    }) * -1) calc(var(--ZUI-sizes_spacing_${
      state.gap
    }) * -1) var(--ZUI-sizes_spacing_${state.gap + 1})`};
  padding: ${({ state }) => `var(--ZUI-sizes_spacing_${state.gap})`};
  ${({ state, theme }) => {
    if (state.bordered)
      return `border-bottom: var(--ZUI-sizes_border_${state.bordered_weigth}) solid var(--ZUI-colors_${state.bordered_color});`;
    if (state.ghost)
      return `background-color: ${hexToRgba(
        theme.colors[state.ghost_color],
        state.ghost_opacity
      )}`;
  }}
`;

export const FooterUI = styled.footer`
  margin: ${({ state }) =>
    `var(--ZUI-sizes_spacing_${state.gap + 1}) calc(var(--ZUI-sizes_spacing_${
      state.gap
    }) * -1) calc(var(--ZUI-sizes_spacing_${state.gap}) * -1)`};
  padding: ${({ state }) => `var(--ZUI-sizes_spacing_${state.gap})`};
  ${({ state, theme }) => {
    if (state.bordered)
      return `border-top: var(--ZUI-sizes_border_${state.bordered_weigth}) solid var(--ZUI-colors_${state.bordered_color});`;
    if (state.ghost)
      return `background-color: ${hexToRgba(
        theme.colors[state.ghost_color],
        state.ghost_opacity
      )}`;
  }}
`;

export const CoverUI = styled.article`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const ContentUI = styled.div`
  z-index: 1;
  position: relative;
`;

export const CoverFigure = styled.figure`
  margin: 0;
  line-height: 0;
  height: 100%;
  width: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CoverCustomContent = styled.div`
  height: 100%;
`;
