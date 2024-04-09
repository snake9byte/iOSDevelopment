import { ContainerUI } from "./Container.styles";
import { useThemeContext } from "../Theme";
import { ContainerProvider } from "./context";

export const Container = props => {
  const { theme } = useThemeContext();
  return (
    <ContainerProvider state={{
      gap: props.gap,
      direction: props.direction,
    }}>
      <ContainerUI {...props} theme={theme}>
        {props.children}
      </ContainerUI>
    </ContainerProvider>
)};



Container.defaultProps = {
  gap: 4,
  wrap: "nowrap",
  justify: "flex-start",
  direction: "row",
  alignItems: "flex-start",
  alignContent: "flex-start",
  flex: false,
  size: 5,
}
