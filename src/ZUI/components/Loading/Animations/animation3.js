import styled from "styled-components";

export const Animation3 = () => (
  <AnimationContainer >
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
    width: 5%;
    height: 25%;
    background-color: #fff;
    border-radius: var(--ZUI-sizes_radius_lg);
    position: absolute;
    opacity: .5;

    &:nth-child(1) {
      transform: translate(700%, 150%);
      animation: 2s ease 0s infinite normal none running ZUI-loading-type3a;
    }
    &:nth-child(2) {
      transform: translate(945%, 150%);
      animation: 2s ease .4s infinite normal none running ZUI-loading-type3b;
    }
    &:nth-child(3) {
      transform: translate(1190%, 150%);
      animation: 2s ease .8s infinite normal none running ZUI-loading-type3c;
    }
  }
`;