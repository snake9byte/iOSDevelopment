import styled from "styled-components";

export const Animation2 = () => (
  <AnimationContainer>
    <span></span>
    <span></span>
    <span></span>
  </AnimationContainer>
);

const AnimationContainer = styled.span`
  position: relative;
  width: 75%;
  height: 100%;
  display: inline-block;
  min-width: 2rem;

  > span {
    display: block;
    width: 25%;
    height: 25%;
    background-color: #fff;
    border-radius: var(--ZUI-sizes_radius_lg);
    position: absolute;

    &:nth-child(1) {
      transform: translate(0px, 150%);
      animation: 2s ease 0s infinite normal none running ZUI-loading-type2;
    }
    &:nth-child(2) {
      transform: translate(150%, 150%);
      animation: 2s ease .4s infinite normal none running ZUI-loading-type2;
    }
    &:nth-child(3) {
      transform: translate(300%, 150%);
      animation: 2s ease .8s infinite normal none running ZUI-loading-type2;
    }
  }
`;