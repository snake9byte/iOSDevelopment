import styled from "styled-components";
import { hexToRgba, gradientOrColor } from "../../utils";

export const AvatarUI = styled.span`
  border: 0;
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }) => `var(--ZUI-sizes_avatar_${size})`};
  height: ${({ size }) => `var(--ZUI-sizes_avatar_${size})`};
  overflow: hidden;
  position: relative;
  border-radius: ${({ squared }) =>
    squared
      ? "var(--ZUI-sizes_radius_percentage_md)"
      : "var(--ZUI-sizes_radius_percentage_xl)"};
  transition: ${({ transition }) =>
    `all var(--ZUI-transitions_${transition}) ease`};
  font-size: ${({ size }) => {
    let fontSize;
    if (size === "xs") fontSize = 1;
    if (size === "sm") fontSize = 2;
    if (size === "md") fontSize = 3;
    if (size === "lg") fontSize = 4;
    if (size === "xl") fontSize = 5;
    return `var(--ZUI-sizes_font_${fontSize})`;
  }};
  ${({ pointer }) =>
    pointer &&
    `
    cursor: pointer;
  `}

  figure {
    line-height: 0;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    transition: all 0.3s ease;
    border-radius: ${({ squared }) =>
      squared
        ? "var(--ZUI-sizes_radius_percentage_md)"
        : "var(--ZUI-sizes_radius_percentage_xl)"};
    box-sizing: border-box;

    &:hover {
      ${({ zoom }) => zoom && `transform: scale(1.2);`}
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${({ bordered, border_weight }) =>
      bordered
        ? `
      width: calc(100% - (var(--ZUI-sizes_border_${border_weight}) * 2));
      height: calc(100% - (var(--ZUI-sizes_border_${border_weight}) * 2));
      border: .125rem solid var(--ZUI-colors_background);
      margin: var(--ZUI-sizes_border_${border_weight});
    `
        : `
      width: 100%;
      height: 100%;
      border: 0 none;
      margin: 0;
    `};
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    text-align: center;
    ${({ text_color }) =>
      text_color &&
      `
      color: ${text_color};
    `}
    transform: translate(-50%, -50%);
    transition: ${({ transition }) =>
      `all var(--ZUI-transitions_${transition}) ease`};

    &.icon {
      transform: translate(-50%, -50%) scale(1.2);
    }
  }

  &:hover {
    .text {
      ${({ zoom }) => zoom && `transform: translate(-50%, -50%) scale(1.5);`}

      &.icon {
        ${({ zoom }) => zoom && `transform: translate(-50%, -50%) scale(2);`}
      }
    }
  }
`;

export const Background = styled.span`
  background: ${({ bg_color, theme, bordered, img_src }) =>
    !bordered && img_src
      ? "transparent"
      : bg_color
      ? gradientOrColor(bg_color)
      : hexToRgba(theme.colors.text, 0.1)};
  display: block;
  height: 100%;
  width: 100%;
`;
