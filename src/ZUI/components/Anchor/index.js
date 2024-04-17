import { AnchorUI, IconWrapper } from "./Anchor.styles";
import { useThemeContext } from "../Theme";
import { Icon } from "../Icons";

/**
 * @param props
 * Name        Type               Default     Description
 * ---------------------------------------------------------------------------------------------------------
 * box         boolean            false       Change the display to inline-block
 * decoration  boolean            false       Display the underline text only in the hover status
 * href        string             -           Link url
 * icon        boolean / string   false       Show an icon
 * text_color   string             inherit     Change font color
 */

export const Anchor = props => {
  const { theme } = useThemeContext();
  return (
    <AnchorUI href={props.link} {...props} theme={theme}>
      {props.children}
      {props.icon && (
        <IconWrapper>
          <Icon name={props.icon === true ? "link" : props.icon} />
        </IconWrapper>
      )}
    </AnchorUI>
  );
};

Anchor.defaultProps = {
  text_color: "primary",
};
