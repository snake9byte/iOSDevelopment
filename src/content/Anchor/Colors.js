import { Container, Anchor } from "../../ZUI";
import { H2, ExampleCode, Code } from "../../components/StyledComponents";

export const AnchorColors = () => (
  <Container.Row>
      <H2>Colors</H2>
      <p>
        You can change the Anchor <Code>color</Code> with the{" "}
        <Code>text_color</Code> property
      </p>
      <p>
        <Anchor text_color="primary" href="#">
          Lorem ipsum dolor sit amet (Primary)
        </Anchor>
      </p>
      <p>
        <Anchor text_color="secondary" href="#">
          Lorem ipsum dolor sit amet (Secondary)
        </Anchor>
      </p>
      <p>
        <Anchor text_color="success" href="#">
          Lorem ipsum dolor sit amet (Success)
        </Anchor>
      </p>
      <p>
        <Anchor text_color="warning" href="#">
          Lorem ipsum dolor sit amet (Warning)
        </Anchor>
      </p>
      <p>
        <Anchor text_color="error" href="#">
          Lorem ipsum dolor sit amet (Error)
        </Anchor>
      </p>
      <p>
        <Anchor href="#">Lorem ipsum dolor sit amet (Default)</Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor text_color="primary" href="#">
    Lorem ipsum dolor sit amet (Primary)
  </Anchor>
  <br />
  <Anchor text_color="secondary" href="#">
    Lorem ipsum dolor sit amet (Secondary)
  </Anchor>
  <br />
  <Anchor text_color="success" href="#">
    Lorem ipsum dolor sit amet (Success)
  </Anchor>
  <br />
  <Anchor text_color="warning" href="#">
    Lorem ipsum dolor sit amet (Warning)
  </Anchor>
  <br />
  <Anchor text_color="error" href="#">
    Lorem ipsum dolor sit amet (Error)
  </Anchor>
  <br />
  <Anchor href="#">
    Lorem ipsum dolor sit amet (Default)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
)