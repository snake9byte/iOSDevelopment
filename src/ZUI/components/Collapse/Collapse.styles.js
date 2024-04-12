import styled from "styled-components";
import { hexToRgba } from "../../utils";
import { colorsSchema } from "../Theme";

export const GroupUI = styled.div`
  width: 100%;
  ${({ variant, theme, divider_weight }) => {
    if (variant === "filled") {
      return `
        background-color: ${hexToRgba(theme.colors.gray_3, 0.1)};
        border-radius: var(--ZUI-sizes_radius_lg);
        padding: var(--ZUI-sizes_spacing_4);
        box-sizing: border-box;
        box-shadow: var(--ZUI-shadows_gray);
        margin-bottom: var(--ZUI-sizes_spacing_4);`;
    }
    if (variant === "bordered") {
      return `
        border-radius: var(--ZUI-sizes_radius_lg);
        padding: var(--ZUI-sizes_spacing_4);
        box-sizing: border-box;
        border: var(--ZUI-sizes_border_${divider_weight}) solid ${hexToRgba(
        theme.colors.text,
        0.3
      )};`;
    }
  }}
`;

export const ItemUI = styled.section`
  ${({ variant, theme }) =>
    variant === "splitted" &&
    `
        background-color: ${hexToRgba(theme.colors.gray_3, 0.1)};
        border-radius: var(--ZUI-sizes_radius_lg);
        padding: var(--ZUI-sizes_spacing_4);
        box-sizing: border-box;
        box-shadow: var(--ZUI-shadows_sm) ${hexToRgba(
          colorsSchema.gray500,
          0.5
        )};
        margin-bottom: var(--ZUI-sizes_spacing_4);`}

  &:not(:last-child) {
    border-bottom: ${({ variant, theme, divider, divider_weight }) =>
      variant === "splitted" || !divider
        ? "0 none"
        : `var(--ZUI-sizes_border_${divider_weight}) solid ${hexToRgba(
            theme.colors.text,
            0.3
          )}`};
  }
`;

export const ItemContent = styled.section`
  max-height: 0;
  overflow: hidden;
  ${({ animation }) =>
    animation &&
    "transition: all var(--ZUI-transitions_regular) cubic-bezier(0, 1, 0, 1);"}

  > div {
    padding: var(--ZUI-sizes_spacing_4);
  }

  &.open {
    max-height: 99rem;
    ${({ animation }) =>
      animation &&
      "transition: all var(--ZUI-transitions_regular) ease-in-out;"}
  }
`;

export const ItemTitle = styled.div`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  ${({ disabled }) => disabled && `opacity: .2;`}
  display: grid;
  grid-gap: 0;
  grid-template-columns: auto 1fr auto;
  padding: var(--ZUI-sizes_spacing_4);

  :focus-visible {
    outline: currentcolor none medium;
    box-shadow: 0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2)
        var(--ZUI-colors_background),
      0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_primary);
  }

  > h3 {
    margin: 0;
    flex: 1;
    display: flex;
    grid-column: 2;
    grid-row: 1;
  }

  > h4 {
    margin: 0;
    font-size: var(--ZUI-sizes_font_2);
    grid-column: 2;
    grid-row: 2;
    color: ${({ theme }) => hexToRgba(theme.colors.text, 0.6)};
  }

  > section {
    grid-column: 1;
    grid-row: 1/3;
    padding-right: var(--ZUI-sizes_spacing_3);
  }

  > div {
    margin-left: var(--ZUI-sizes_spacing_3);
    grid-column: 3;
    grid-row: 1/3;

    > span {
      ${({ animation }) =>
        animation && "transition: all var(--ZUI-transitions_fast) ease;"}
    }
  }

  &.open {
    > div > span {
      transform: rotate(90deg);
    }
  }
`;
