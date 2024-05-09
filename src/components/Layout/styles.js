import styled from "styled-components";

export const MainLayout = styled.section`
  display: grid;
  width: clamp(90%, 100%, calc(80ch + 200px));
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--ZUI-sizes_spacing_4);

  header,
  footer {
    grid-column: 1/5;
  }

  header {
    grid-row: 1;
  }

  footer {
    grid-row: 3;
  }

  main {
    grid-row: 2;
    grid-column: 1/5;
    overflow: hidden;

    @media (min-width: 650px) {
      grid-column: 2/5;
    }
  }

  aside {
    grid-column: 1/2;

    @media (max-width: 649px) {
      display: none;
    }
  }
`;

export const MainUI = styled.main`
  transition: all var(--ZUI-transitions_slow) ease;
  filter: blur(${({menuStatus}) => menuStatus ? "5px" : 0});
`;