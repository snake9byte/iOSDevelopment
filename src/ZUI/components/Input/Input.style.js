import styled from "styled-components";

const calculateIconPadding = size => {
  if (size === "lg") return [4, 8];
  if (size === "xl") return [5, 10];
  else return [3, 6];
};

const genericInputStyles = (size, color, variant) => {
  let sizes = {};
  if (size === "xs") sizes = { fs: 1, rd: "xs", wd: 4 };
  else if (size === "sm") sizes = { fs: 2, rd: "sm", wd: 5 };
  else if (size === "lg") sizes = { fs: 3, rd: "md", wd: 8 };
  else if (size === "xl") sizes = { fs: 4, rd: "lg", wd: 10 };
  else sizes = { fs: 3, rd: "md", wd: 6 };

  if (variant === "underline") sizes.rd = 0;
  if (variant === "rounded") sizes.rd = "var(--ZUI-sizes_radius_xl)";
  else sizes.rd = `var(--ZUI-sizes_radius_${sizes.rd})`;

  return `
  background: var(--ZUI-colors_gray_1);
  display: inline-block;
  box-sizing: border-box;
  transition: all var(--ZUI-transitions_fast);
  font-size: var(--ZUI-sizes_font_${sizes.fs});
  width: var(--ZUI-sizes_space_${sizes.wd});
  border-radius: ${sizes.rd};
  height: var(--ZUI-sizes_button_height_${size});
  color: var(--ZUI-colors_${color}_5);
`
}

export const InputContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  vertical-align: bottom;
  width: min-content;
`;

export const LabelUI = styled.span`
  margin-bottom: var(--ZUI-sizes_spacing_2);
  display: inline-block;
  width: 100%;

  &::after {
    ${({ is_required }) =>
      is_required &&
      `
      content: "*";
      margin-left: var(--ZUI-sizes_spacing_2);
      color: var(--ZUI-colors_error)
    `}
  }
`;

export const ErrorMessage = styled.span`
  color: var(--ZUI-colors_error);
  display: inline-block;
  width: 100%;
  margin-top: var(--ZUI-sizes_spacing_2);
`;

export const HelpMessage = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: var(--ZUI-sizes_spacing_2);
`;

export const InputWrapper = styled.span`
  ${({icon, is_password, size, color, variant}) => genericInputStyles(size, color, variant)}
  
  position: relative;
  display: inline-block;
  
  > button {
    position: absolute;
    top: var(--ZUI-sizes_border_sm);
    height: calc(100% - (var(--ZUI-sizes_border_sm) * 2));
    width: ${({ size }) =>
      `calc(var(--ZUI-sizes_spacing_${
        calculateIconPadding(size)[1]
      }) - var(--ZUI-sizes_border_sm))`};
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0 none;
    color: var(--ZUI-colors_text);
    right: var(--ZUI-sizes_border_sm);
    padding: 0;

    > span {
      padding: 0;
    }
  }

  > input {
    background: var(--ZUI-colors_gray_1);
    padding: ${({ icon, is_password, size }) => {
      const padding = calculateIconPadding(size);
      if (is_password)
        return `0 var(--ZUI-sizes_spacing_${padding[1]}) 0 var(--ZUI-sizes_spacing_${padding[0]})`;
      if (icon)
        return `0 var(--ZUI-sizes_spacing_${padding[0]}) 0 var(--ZUI-sizes_spacing_${padding[1]}) `;
      return "0 var(--ZUI-sizes_spacing_3)";
    }};
    display: inline-block;
    box-sizing: border-box;
    transition: all var(--ZUI-transitions_fast);
    ${({ size, variant }) => {
      let sizes = {};
      if (size === "xs") sizes = { fs: 1, rd: "xs", wd: 4 };
      else if (size === "sm") sizes = { fs: 2, rd: "sm", wd: 5 };
      else if (size === "lg") sizes = { fs: 3, rd: "md", wd: 8 };
      else if (size === "xl") sizes = { fs: 4, rd: "lg", wd: 10 };
      else sizes = { fs: 3, rd: "md", wd: 6 };

      if (variant === "underline") sizes.rd = 0;
      if (variant === "rounded") sizes.rd = "var(--ZUI-sizes_radius_xl)";
      else sizes.rd = `var(--ZUI-sizes_radius_${sizes.rd})`;

      return `
        font-size: var(--ZUI-sizes_font_${sizes.fs});
        width: var(--ZUI-sizes_space_${sizes.wd});
        border-radius: ${sizes.rd};
        height: var(--ZUI-sizes_button_height_${size});`;
    }}
    ${({ color, variant }) => {
      if (variant === "default" || variant === "rounded")
        return `border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_3);`;
      if (variant === "underline")
        return `
        border-width: 0 0 var(--ZUI-sizes_border_sm);
        border-style: solid;
        border-color: var(--ZUI-colors_${color}_3);`;
      if (variant === "shadow")
        return `border: var(--ZUI-sizes_border_sm) solid transparent;`;
    }};
    color: ${({ color }) => `var(--ZUI-colors_${color}_5)`};

    &::placeholder {
      color: ${({ color }) => `var(--ZUI-colors_${color}_4)`};
      opacity: 0.5;
    }

    &:focus,
    &:focus-visible {
      outline: currentcolor none medium;
      box-shadow: ${({ color }) =>
        `0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${
          color === "gray" ? "primary" : color
        })`};
      ${({ variant, color }) =>
        variant === "shadow" && `background: var(--ZUI-colors_${color}_1);`}
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      user-select: none;
    }

    &[error="true"] {
      border-color: var(--ZUI-colors_error);
      color: var(--ZUI-colors_error);

      &:focus,
      &:focus-visible {
        outline: currentcolor none medium;
        box-shadow: 0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2)
            var(--ZUI-colors_background),
          0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_error);
        ${({ variant, color }) =>
          variant === "shadow" && `background: var(--ZUI-colors_${color}_1);`}
      }
    }
  }
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: var(--ZUI-sizes_border_sm);
  left: var(--ZUI-sizes_border_sm);
  height: calc(100% - (var(--ZUI-sizes_border_sm) * 2));
  width: ${({ size }) =>
    `calc(var(--ZUI-sizes_spacing_${
      calculateIconPadding(size)[1]
    }) - var(--ZUI-sizes_border_sm))`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SelectUI = styled.span`
  ${({size, color, variant}) => genericInputStyles(size, color, variant)}
  padding: ${({ icon, is_password, size }) => {
    const padding = calculateIconPadding(size);
    if (is_password)
      return `0 var(--ZUI-sizes_spacing_${padding[1]}) 0 var(--ZUI-sizes_spacing_${padding[0]})`;
    if (icon)
      return `0 var(--ZUI-sizes_spacing_${padding[0]}) 0 var(--ZUI-sizes_spacing_${padding[1]}) `;
    return "0 var(--ZUI-sizes_spacing_3)";
  }};
  ${({ color, variant }) => {
    if (variant === "default" || variant === "rounded")
      return `border: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_${color}_3);`;
    if (variant === "underline")
      return `
      border-width: 0 0 var(--ZUI-sizes_border_sm);
      border-style: solid;
      border-color: var(--ZUI-colors_${color}_3);`;
    if (variant === "shadow")
      return `border: var(--ZUI-sizes_border_sm) solid transparent;`;
  }};
  display: flex;
  align-items: center;

  &::placeholder {
    color: var(--ZUI-colors_${({color}) => color}_4);
    opacity: 0.5;
  }

  &:focus,
  &:focus-visible {
    outline: currentcolor none medium;
    box-shadow: 0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2) var(--ZUI-colors_background), 0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_${({color}) => color === "gray" ? "primary" : color});
    ${({color, variant}) => variant === "shadow" && `background: var(--ZUI-colors_${color}_1);`}
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    user-select: none;
  }

  &[error="true"] {
    border-color: var(--ZUI-colors_error);
    color: var(--ZUI-colors_error);

    &:focus,
    &:focus-visible {
      outline: currentcolor none medium;
      box-shadow: 0 0 0 calc(var(--ZUI-sizes_spacing_1) / 2)
          var(--ZUI-colors_background),
        0 0 0 var(--ZUI-sizes_spacing_1) var(--ZUI-colors_error);
        ${({color, variant}) => variant === "shadow" && `background: var(--ZUI-colors_${color}_1);`}
    }
  }
`;

export const ItemInputUI = styled.button`
  padding: 1rem;
  background: transparent;
  transition: all 0.3s ease;
  border-width: 0 0 var(--ZUI-sizes_border_sm);
  border-style: solid;
  border-color: var(--ZUI-colors_gray_3);
  color: var(--ZUI-colors_text);
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:focus-visible,
  &:hover,
  &:focus {
    outline: currentcolor none medium;
    background-color: var(--ZUI-colors_gray_2);
  }
`;

export const HiddenInput = styled.input`
  display: none !important;
`;
