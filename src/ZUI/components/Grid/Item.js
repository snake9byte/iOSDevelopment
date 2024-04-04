import { GridItem } from "./Grid.styles";
import { useThemeContext } from "../Theme";

export const Item = (props) => {
  const xs = props.xs;
  const sm = props.sm ? props.sm : xs;
  const md = props.md ? props.md : sm;
  const lg = props.lg ? props.lg : md;
  const xl = props.xl ? props.xl : lg;
  const { theme } = useThemeContext();

  return (
    <GridItem
      className="grid-item"
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      theme={theme}
      {...props}
    >
      {props.children}
    </GridItem>
  );
};
