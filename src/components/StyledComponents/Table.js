import styled from "styled-components";
import { hexToRgba, useThemeContext } from "../../ZUI";

export const Table = ({children}) => {
  const { theme } = useThemeContext();
  return (
    <TableUI theme={theme}>
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Type</th>
          <th>Accepted values</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </TableUI>
  )
};

export const Row = ({
  attribute,
  type,
  values,
  description,
  defaultValue,
}) => (
  <TR>
    <td>
      <strong>{attribute}</strong>
    </td>
    <td>{type}</td>
    <td>{values}</td>
    <td>{description}</td>
    <td>{defaultValue}</td>
  </TR>
);

const TableUI = styled.table`
  border-collapse: collapse;

  tr > th {
    background-color: ${({theme}) => hexToRgba(theme.colors.gray900, .4)};
    padding: .5rem 1rem;
  }

  tr > th:first-child {
    border-radius: var(--ZUI-sizes_radius_sm) 0 0 var(--ZUI-sizes_radius_sm);
  }

  tr > th:last-child {
    border-radius: 0 var(--ZUI-sizes_radius_sm) var(--ZUI-sizes_radius_sm) 0;
  }
`;

const TR = styled.tr`
  > td {
    padding: var(--ZUI-sizes_spacing_3) var(--ZUI-sizes_spacing_4);
  }
`;