import { core } from "./coreTheme";
import { mergeTheme } from "./mergeTheme";
import { colorsSchema } from "./colorsSchema";
import { hexToRgba } from "../../utils";

export const CreateTheme = (theme, base) => {
  return mergeTheme(theme, base ? base : core);
}

export const lightTheme = CreateTheme(
  {
    name: "light",
    colors: {
      text: "#000",
      background: "#fff",
    }
  },
  core
);

export const darkTheme = CreateTheme(
  {
    name: "dark",
    colors: {
      text: "#fff",
      background: "#24242D",

      primary: colorsSchema.blue500,
      primary_1: colorsSchema.blue900,
      primary_2: colorsSchema.blue700,
      primary_3: colorsSchema.blue500,
      primary_4: colorsSchema.blue300,
      primary_5: colorsSchema.blue100,

      secondary: colorsSchema.purple500,
      secondary_1: colorsSchema.purple900,
      secondary_2: colorsSchema.purple700,
      secondary_3: colorsSchema.purple500,
      secondary_4: colorsSchema.purple300,
      secondary_5: colorsSchema.purple100,

      success: colorsSchema.green500,
      success_1: colorsSchema.green900,
      success_2: colorsSchema.green700,
      success_3: colorsSchema.green500,
      success_4: colorsSchema.green300,
      success_5: colorsSchema.green100,

      warning: colorsSchema.yellow500,
      warning_1: colorsSchema.yellow900,
      warning_2: colorsSchema.yellow700,
      warning_3: colorsSchema.yellow500,
      warning_4: colorsSchema.yellow300,
      warning_5: colorsSchema.yellow100,

      error: colorsSchema.red500,
      error_1: colorsSchema.red900,
      error_2: colorsSchema.red700,
      error_3: colorsSchema.red500,
      error_4: colorsSchema.red300,
      error_5: colorsSchema.red100,

      gray: colorsSchema.gray500,
      gray_1: colorsSchema.gray900,
      gray_2: colorsSchema.gray700,
      gray_3: colorsSchema.gray500,
      gray_4: colorsSchema.gray300,
      gray_5: colorsSchema.gray100,
    },
    shadows: {
      gray: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.gray900, .5)}`,
      primary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.blue900, .5)}`,
      secondary: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.purple900, .5)}`,
      success: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.green900, .5)}`,
      warning: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.yellow900, .5)}`,
      error: `var(--ZUI-shadows_md) ${hexToRgba(colorsSchema.red900, .5)}`,

      gray_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.gray900, .5)}`,
      primary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.blue900, .5)}`,
      secondary_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.purple900, .5)}`,
      success_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.green900, .5)}`,
      warning_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.yellow900, .5)}`,
      error_xl: `var(--ZUI-shadows_xl) ${hexToRgba(colorsSchema.red900, .5)}`,
    },
  },
  core
)