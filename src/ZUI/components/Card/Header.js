import { HeaderUI } from "./Card.styles";
import { useCardContext } from "./context";
import { useThemeContext } from "../Theme";

export const Header = props => {
  const { state } = useCardContext();
  const { theme } = useThemeContext();
  
  return (
    <HeaderUI {...props} state={state} theme={theme}>{props.children}</HeaderUI>
  )
};