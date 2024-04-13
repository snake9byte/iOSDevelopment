import { FooterUI } from "./Card.styles";
import { useCardContext } from "./context";
import { useThemeContext } from "../Theme";

export const Footer = props => {
  const { state } = useCardContext();
  const { theme } = useThemeContext();
  
  return (
    <FooterUI {...props} state={state} theme={theme}>{props.children}</FooterUI>
  )
};