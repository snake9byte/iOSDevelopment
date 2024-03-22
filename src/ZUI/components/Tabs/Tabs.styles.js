import styled from "styled-components";

export const MenuUI = styled.menu`
  margin: 0;
  padding: 0;

  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    overflow: auto;
    border-bottom: var(--ZUI-sizes_border_sm) solid var(--ZUI-colors_gray_3);
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border-width: 0 0 var(--ZUI-sizes_border_md);
  border-style: solid;
  border-color: ${({state}) => state ? `var(--ZUI-colors_primary)` : "transparent"};
  padding: var(--ZUI-sizes_spacing_3) var(--ZUI-sizes_spacing_5);
  cursor: pointer;
  color: var(--ZUI-colors_text);
  font-size: 1rem;
  transition: all var(--ZUI-transitions_regular) ease;
  
  &:hover {
    color: var(--ZUI-colors_primary);
  }
`;

export const TabList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TabUI = styled.li`
  padding: var(--ZUI-sizes_spacing_4);
  display: ${({state}) => state ? "block" : "none"};
`;