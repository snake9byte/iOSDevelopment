import { GridContainer } from "./Grid.styles";

export const Grid = props => {
  return (
  <GridContainer {...props}>
    {props.children}
  </GridContainer>
)}

Grid.defaultProps = {
  gap: 4,
  wrap: "wrap",
  justify: "flex-start",
  direction: "row",
  align_items: "center",
  align_content: "center",
}