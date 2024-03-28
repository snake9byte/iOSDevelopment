import styled from "styled-components";

export const Animation1 = () => (
  <AnimationContainer>
    <span></span>
  </AnimationContainer>
);

const AnimationContainer = styled.span`
  position: relative;
  width: 75%;
  height: 100%;
  display: inline-block;
  min-width: 2rem;

  span {
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: var(--ZUI-sizes_radius_lg);
    animation: 2s ease 0s infinite normal none running ZUI-loading-type1;
    transform: translate(0px, 150%);
  }
`;