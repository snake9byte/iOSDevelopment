import styled from "styled-components";
import { Icon } from "../../Icons";


export const Animation4 = () => (
  <AnimationContainer >
    <Icon name="loading_1" size="lg" />
  </AnimationContainer>
);

const AnimationContainer = styled.span`
  position: relative;
  width: 75%;
  height: 100%;
  display: inline-block;
  min-width: 2rem;

  > span {
    animation: 2s linear 0s infinite normal none running ZUI-loading-type4;
  }
`;