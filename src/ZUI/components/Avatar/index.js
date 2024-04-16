import { AvatarUI, Background } from "./Avatar.styles";
import { useThemeContext } from "../Theme";
import { Icon } from "../Icons";

/**
 * @param props
 * Name           Type        Default       Description
 * ---------------------------------------------------------------------------------------------
 * bg_color       string      transparent   Change the border color
 * bordered       boolean     false         Set the border property
 * border_weight  string      md            Set the border size
 * icon           string      -             Show an icon
 * img_src        string      -             Image url
 * pointer        boolean     false         Change the cursor to pointer
 * size           string      md            Display the underline text only in the hover status
 * squared        boolean     false         Change the border radius
 * text           string      -             Display text
 * text_alt        string      -             Display text when the image is missing or loading
 * text_color     string      inherit       Change font color
 * zoom           boolean     false         Enable zoom property on avatar
 */

export const Avatar = (props) => {
  const { theme } = useThemeContext();
  return (
    <AvatarUI {...props} text_color={props.text_color} theme={theme}>
      <Background
        theme={theme}
        bg_color={props.bg_color}
        bordered={props.bordered}
        img_src={props.img_src}
      ></Background>
      {props.img_src && (
        <figure>
          <img src={props.img_src} alt={props.text_alt} />
        </figure>
      )}
      {props.text && <span className="text">{props.text}</span>}
      {props.icon !== "" && (
        <span className="text icon">
          <Icon name={props.icon} />
        </span>
      )}
    </AvatarUI>
  );
};

Avatar.defaultProps = {
  size: "md",
  icon: "",
  // group: false,
  border_weight: "md",
  text_color: "inherit",
  transition: "regular",
};
