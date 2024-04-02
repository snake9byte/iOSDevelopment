import { IconContainer } from "./Icons.styles";

export const Icon = ({ name, size }) => (
  <IconContainer size={size}>
    <i className={`ZUI-icon ZUI-${name}`}></i>
  </IconContainer>
);

Icon.defaultProps = {
  size: "md",
}