import styled from "styled-components";
import { hexToRgba } from "../../utils";

export const AnchorUI = styled.a`
  text-decoration: none;
  color: ${({ text_color }) =>
    text_color
      ? `var(--ZUI-colors_${text_color})`
      : "var(--ZUI-colors_primary)"};
  ${({ box }) =>
    box &&
    `
    display: inline-block;
    padding: var(--ZUI-sizes_border_sm) var(--ZUI-sizes_border_lg);
    background-color: transparent;
    border-radius: var(--ZUI-sizes_radius_sm);
  `}

  &:hover {
    text-decoration: ${({ decoration }) => (decoration ? "underline" : "none")};
    color: ${({ text_color, theme }) =>
      text_color
        ? hexToRgba(theme.colors[text_color], 0.8)
        : hexToRgba(theme.colors.primary, 0.8)};
    ${({ box, text_color, theme }) =>
      box &&
      `
      background-color: ${
        text_color
          ? hexToRgba(theme.colors[text_color], 0.2)
          : hexToRgba(theme.colors.primary, 0.2)
      };
      border-radius: var(--ZUI-sizes_radius_sm);
    `}
  }

  &:focus-visible {
    outline: currentcolor none medium;
    box-shadow: ${({ text_color }) =>
      `0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${text_color.replace(
        "gradients_",
        ""
      )})`};
  }
`;

export const IconWrapper = styled.span`
  margin-left: var(--ZUI-sizes_spacing_2);
`;
