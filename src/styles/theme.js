import { CreateTheme, darkTheme } from "../ZUI";

export const userTheme = CreateTheme({
  name: "userTheme",
  customProp: {
    newProp: "newCode"
  }
}, darkTheme);