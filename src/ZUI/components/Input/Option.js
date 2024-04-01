import { ItemInputUI } from "./Input.style";

export const Option = ({ label, value }) => {
  return (
    <ItemInputUI value={value} tabIndex="0">
      {label}
    </ItemInputUI>
  );
};
