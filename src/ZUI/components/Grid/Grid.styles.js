import styled from "styled-components";

export const GridContainer = styled.ul`
  --gap: ${({ gap }) => `var(--ZUI-sizes_spacing_${gap})`};
  --width: auto;
  list-style: none;
  padding: var(--gap) calc(var(--gap) / 2);
  margin: 0;
  display: inline-flex;
  flex-wrap: ${({ wrap }) => wrap};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align_items }) => align_items};
  align-content: ${({ align_content }) => align_content};
  width: 100%;
  box-sizing: border-box;
`;

export const GridItem = styled.li`
  width: ${({ xs }) => (xs ? `calc((${xs} / 12) * 100%)` : "auto")};
  box-sizing: border-box;
  flex-grow: 0;
  padding: var(--gap) calc(var(--gap) / 2);
  display: ${({ xs }) => (xs === 0 ? "none" : "block")};

  @media (min-width: ${({ theme }) => theme.break_points.sm}) {
    width: ${({ sm }) => (sm ? `calc((${sm} / 12) * 100%)` : "auto")};
    display: ${({ sm }) => (sm === 0 ? "none" : "block")};
  }

  @media (min-width: ${({ theme }) => theme.break_points.md}) {
    width: ${({ md }) => (md ? `calc((${md} / 12) * 100%)` : "auto")};
    display: ${({ md }) => (md === 0 ? "none" : "block")};
  }

  @media (min-width: ${({ theme }) => theme.break_points.lg}) {
    width: ${({ lg }) => (lg ? `calc((${lg} / 12) * 100%)` : "auto")};
    display: ${({ lg }) => (lg === 0 ? "none" : "block")};
  }

  @media (min-width: ${({ theme }) => theme.break_points.xl}) {
    width: ${({ xl }) => (xl ? `calc((${xl} / 12) * 100%)` : "auto")};
    display: ${({ xl }) => (xl === 0 ? "none" : "block")};
  }
`;
