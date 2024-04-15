import { ButtonUI, ButtonContentUI, IconWrapper } from "./Button.styles";
import { useThemeContext } from "../Theme";
import { Loading } from "../Loading";
import { Icon } from "../Icons";

/**
 * @param props 
 * Name           Type        Default       Description
 * ---------------------------------------------------------------------------------------------
 * auto           boolean     false         Remove the min-width attribute
 * color          string      primary       Change the button color
 * disabled       boolean     false         Change the status button
 * icon           string      false         Show an icon
 * loading        number      undefined     Show the loading animation
 * rounded        boolean     false         Change the button border radius
 * shadow         boolean     false         Add a shadow bellow of the button
 * size           string      md            Change the button size
 * variant        string      filled        Change the button style
 */

export const Button = (props) => {
  const { theme } = useThemeContext();
  
  return (
    <ButtonUI {...props} theme={theme} disabled={props.disabled}>
      {props.loading ?
        <Loading loading={props.loading} /> :
        <ButtonContentUI
          size={props.size}
          rounded={props.rounded}
          variant={props.variant} >
            <span>{props.children}</span>
            {props.icon && <IconWrapper haveChildren={props.children ? true : false}>
              <Icon name={props.icon} size={props.size}/>
            </IconWrapper>}
        </ButtonContentUI>}
    </ButtonUI>
  );
}

Button.defaultProps = {
  size: "md",
  color: "primary",
  variant: "filled",
  rounded: false,
  disabled: false,
}