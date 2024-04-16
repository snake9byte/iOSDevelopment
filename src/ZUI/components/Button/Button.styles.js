import styled from "styled-components";
import { hexToRgba } from "../../utils";

const defineColors = ({color, disabled, loading}) => {
  if (disabled && !loading) {
    return {
      font: "gray_3",
      bg: "gray_1",
    }
  }
  return {
    font: `${color.replace("gradients_", "")}_1`,
    bg: color,
  }
  
}

export const ButtonUI = styled.button`
  --content-bg: ${({color, variant}) => (/gradient/g.test(color) && (variant === "outlined" || variant === "shadow")) ?
    "var(--ZUI-colors_background)" : "transparent"};
  ${({margin}) => margin && `margin: 0 var(--ZUI-sizes_spacing_${margin})`};
  width: auto;
  display: inline-block;
  border: ${({color}) => /gradient/g.test(color) ? "0 none" : "var(--ZUI-sizes_border_sm) solid"};
  padding: 0;
  vertical-align: middle;
  transition: all var(--ZUI-transitions_fast) ease;
  font-weight: bold;
  font-family: var(--ZUI-fonts_sans);
  cursor: ${({disabled, loading}) => disabled || loading ? "not-allowed" : "pointer"};
  ${({size, auto, rounded}) => {
    let sizes = {};
    if (size === "xs") sizes = {fs: 1, rd: "xs", wd: 2};
    else if (size === "sm") sizes = {fs: 2, rd: "sm", wd: 4};
    else if (size === "lg") sizes = {fs: 3, rd: "md", wd: 8};
    else if (size === "xl") sizes = {fs: 4, rd: "lg", wd: 10};
    else sizes = {fs: 3, rd: "md", wd: 6};
    return `
      font-size: var(--ZUI-sizes_font_${sizes.fs});
      min-width: ${auto ? "auto" : "var(--ZUI-sizes_space_" + sizes.wd + ")"};
      border-radius: var(--ZUI-sizes_radius_${rounded ? "xl" : sizes.rd});
      line-height: var(--ZUI-sizes_button_height_${size});
      height: var(--ZUI-sizes_button_height_${size});`
  }}
  ${({color, theme, disabled, variant, loading}) => {
    const colors = defineColors({color, theme, disabled, loading});
    if (variant === "outlined") {
      return `
        ${/gradient/g.test(color) ?
          "background: var(--ZUI-" + colors.bg + "); padding: var(--ZUI-sizes_border_sm);" :
          "background: transparent;"}
        color: var(--ZUI-colors_${color.replace("gradients_", "")});
      `;
    }
    if (variant === "text") {
      return `
        background: transparent;
        color: var(--ZUI-colors_${color.replace("gradients_", "")});
        border-color: transparent;
      `;
    }
    if (variant === "flat") {
      return `
        background: ${hexToRgba(theme.colors[color.replace("gradients_", "")],.25)};
        color: var(--ZUI-colors_${color.replace("gradients_", "")});
        border-color: transparent;
      `;
    }
    if (variant === "shadow") {
      return `
        ${/gradient/g.test(color) ?
          "background: var(--ZUI-" + colors.bg + "); padding: var(--ZUI-sizes_border_sm);" :
          "background: transparent;"}
        color: var(--ZUI-colors_${color.replace("gradients_", "")});
      `;
    }
    return `
      background: ${/gradient/g.test(color) ?
        "var(--ZUI-" + colors.bg + ")" :
        "var(--ZUI-colors_" + colors.bg + ")"};
      color: var(--ZUI-colors_${colors.font});
      border-color: var(--ZUI-colors_${colors.bg.replace("gradients_", "")});
    `;
  }};
  ${({color, shadow}) => shadow && `
    box-shadow: var(--ZUI-shadows_${color.replace("gradients_", "")}_sm) ;
  `};

  &:focus-visible {
    outline: currentcolor none medium;
    box-shadow: ${({color}) => `0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${color.replace("gradients_", "")})`};
  }

  &:hover {
    ${({disabled, loading, variant, color, theme}) => {
      const colors = defineColors({color, theme, disabled, loading});
      if (disabled || loading ) return "opacity: 1;";
      if (variant === "shadow") {
        return `
          background: ${/gradient/g.test(color) ?
            "var(--ZUI-" + colors.bg + ")" :
            "var(--ZUI-colors_" + colors.bg + ")"};
          color: var(--ZUI-colors_${colors.font});
          border-color: var(--ZUI-colors_${colors.bg.replace("gradients_", "")});
        `
      }
      return "opacity: .8;";
    }}
  }

  &:active {
    ${({disabled, loading}) => {
      if (!disabled && !loading ) return "transform: scale(.9);";
    }}
  }
`;

export const ButtonContentUI = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--content-bg);
  padding: 0 var(--ZUI-sizes_spacing_4);
  height: 100%;
  box-sizing: border-box;
  border-radius: ${({size}) => {
    if (size === "xs") return "var(--ZUI-sizes_radius_xs)";
    if (size === "sm") return "var(--ZUI-sizes_radius_sm)";
    if (size === "lg") return "var(--ZUI-sizes_radius_md)";
    if (size === "xl") return "var(--ZUI-sizes_radius_lg)";
    return "var(--ZUI-sizes_radius_md)";
  }};
  :hover {
    ${({variant}) => variant === "shadow" && `background: transparent`}
  }
`;

export const IconWrapper = styled.span`
  margin-left: ${({haveChildren}) => haveChildren ? "var(--ZUI-sizes_spacing_2)" : 0 };
`;