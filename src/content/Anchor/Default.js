import { Container, Anchor } from "../../ZUI";
import { H2, ExampleCode } from "../../components/StyledComponents";

export const AnchorDefault = () => (
  <Container.Row>
    <H2>Default</H2>
    <p>
      The default Anchor color it's the primary color defined in the theme
      config.
    </p>
    <p>
      <Anchor link="#">Lorem ipsum dolor sit amet</Anchor>
    </p>
    <ExampleCode>
      {`<p>
  <Anchor link="#">
    Lorem ipsum dolor sit amet
  </Anchor>
</p>`}
    </ExampleCode>
  </Container.Row>
)