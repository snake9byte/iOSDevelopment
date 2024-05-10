import styled from "styled-components";

export const LogoSize = styled.figure`
  width: 3rem;
  margin: 0;

  img {
    width: 100%;
  }

  figcaption {
    display: none;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;

  > button > span {
    transition: all var(--ZUI-transitions_regular) ease;
    transform: ${({ menuStatus }) => (menuStatus ? "rotate(180deg)" : "none")};
  }
`;

export const HeaderUI = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 2rem ${({ theme }) => theme.colors.background};
`;
