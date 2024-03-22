import { TextUI } from "./Text.styles";

export const Text = props => {
  return (
    <TextUI {...props}>
      {props.children}
    </TextUI>
  )
}

Text.defaultProps = {
  decoration: "none",
  icon: false,
  display: "inline",
}