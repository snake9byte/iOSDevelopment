import { Anchor, Container } from "../../ZUI";
import { TitleContent } from "../../components/TitleContent";
import { Layout } from "../../components/Layout";
import {
  H2,
  Code,
  Table,
  Row,
  ExampleCode,
  Types,
} from "../../components/StyledComponents";
import { Link } from "react-router-dom";
import { AnchorDefault } from "./Default";
import { AnchorColors } from "./Colors";

export const AnchorContent = () => (
  <Layout>
    <TitleContent title="Anchor">
      Anchors <Code>{`<Anchor>`}</Code> component brings to the developers the
      possibility to customize all links in their project in the same place or
      customize each element separately, this component renders an{" "}
      <Code>{`<a>`}</Code> HTML element.
    </TitleContent>
    <AnchorDefault />
    <AnchorColors />
    <Container.Row>
      <H2>Variants</H2>
      <p>
        You can change the default look with the <Code>decoration</Code> and{" "}
        <Code>Block</Code> properties.
      </p>
    </Container.Row>
    <Container.Row>
      <h3>Underline</h3>
      <p>Adds an underline style only in the hover state.</p>
      <p>
        <Anchor href="#" decoration>
          Lorem ipsum dolor sit amet (Decoration)
        </Anchor>
      </p>
      <p>
        <Anchor href="#" decoration text_color="secondary">
          Lorem ipsum dolor sit amet (Decoration)
        </Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" decoration>
    Lorem ipsum dolor sit amet (Decoration)
  </Anchor>
  <br />
  <Anchor href="#" decoration text_color="secondary">
    Lorem ipsum dolor sit amet (Decoration)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Block</h3>
      <p>
        Adds a background color in the hover state and also change the display
        inline to inline-block.
      </p>
      <p>
        <Anchor href="#" box text_color="success">
          Lorem ipsum dolor sit amet (Box)
        </Anchor>
      </p>
      <p>
        <Anchor href="#" box text_color="warning">
          Lorem ipsum dolor sit amet (Box)
        </Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" box text_color="success">
    Lorem ipsum dolor sit amet (Box)
  </Anchor>
  <Anchor href="#" box text_color="warning">
    Lorem ipsum dolor sit amet (Box)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Icons</H2>
      <p>
        You can add the default icon setting the <Code>icon</Code> property and
        also you can add a custom icon changing the <Code>icon</Code> property
        value.
      </p>
      <p>
        <Anchor href="#" icon>
          Lorem ipsum dolor sit amet (Icon)
        </Anchor>
      </p>
      <p>
        <Anchor href="#" icon="chevron-left">
          Lorem ipsum dolor sit amet (Icon back)
        </Anchor>
      </p>
      <ExampleCode>
        {`<p>
  <Anchor href="#" icon>
    Lorem ipsum dolor sit amet (Icon)
  </Anchor>
  <br />
  <Anchor href="#" icon="back">
    Lorem ipsum dolor sit amet (Icon back)
  </Anchor>
</p>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Props</H2>
      <Table>
        <Row
          attribute="box"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the display to inline-block"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="decoration"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Display the underline text only in the hover status"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="href"
          type={<Code>string</Code>}
          values="-"
          description="Link url"
          defaultValue="-"
        />
        <Row
          attribute="icon"
          type={
            <>
              <Code>boolean</Code> <Code>string</Code>
            </>
          }
          values={
            <>
              <Code>true/false</Code>{" "}
              <Anchor as={Link} to="/icons">
                Icons
              </Anchor>
            </>
          }
          description="Show an icon"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="text_color"
          type={<Code>string</Code>}
          values={<Anchor href="#anchorColors">LinkColors</Anchor>}
          description="Change font color"
          defaultValue={<Code>inherit</Code>}
        />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="text_color options" constName="colors" id="anchorColors" />
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">
        Icons
      </Anchor>
    </Container.Row>
  </Layout>
);
