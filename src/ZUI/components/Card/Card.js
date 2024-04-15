import { CardUI, ContentUI } from "./Card.styles";
import { useThemeContext } from "../Theme";
import { CardProvider } from "./context";
import { Cover } from "./Cover";

/**
 * @param props
 * Name             Type                Default       Description
 * ---------------------------------------------------------------------------------------------
 * bordered         boolean             false         Change the card styles
 * bordered_color    string              sm            Change the Header and Footter border size
 * bordered_weigth   string              gray_3        Change the Header and Footter border color
 * clickable        boolean             false         Adds animations to hover and active states
 * color            string              shadow        Change the card style
 * cover            string / ReactNode  -             Set the cover card section
 * ghost            boolean             false         Change the card styles
 * ghost_color       string              gray_5        Change the background color of the Header and Footer
 * ghost_opacity     number              .1            Change the Header and Footter opacity background
 * variant          string              shadow        Change the card style
 */

export const Card = (props) => {
  const { theme } = useThemeContext();

  return (
    <CardProvider
      state={{
        gap: props.gap,
        bordered: props.bordered,
        ghost: props.ghost,
        color: props.color,
        ghost_color: props.ghost_color,
        ghost_opacity: props.ghost_opacity,
        bordered_weigth: props.bordered_weigth,
        bordered_color: props.bordered_color,
      }}
    >
      <CardUI {...props} theme={theme}>
        {props.cover && <Cover content={props.cover} />}
        <ContentUI>{props.children}</ContentUI>
      </CardUI>
    </CardProvider>
  );
};

Card.defaultProps = {
  radius: "md",
  img_src: "",
  text_alt: "",
  variant: "shadow",
  gap: 4,
  color: "gray",
  ghost_color: "gray_5",
  ghost_opacity: 0.1,
  bordered_weigth: "sm",
  bordered_color: "gray_3",
};
