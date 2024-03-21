import styled from "styled-components";

export const TextUI = styled.span`
  text-decoration: ${({decoration}) => decoration};
  ${({color}) => color && `
    color: var(--ZUI-colors_${color});
  `}
  display: ${(props) => props.display};
`;