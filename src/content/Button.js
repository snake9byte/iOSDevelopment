import { Button, Anchor, Container } from "../ZUI";
import { Layout } from "../components/Layout";
import { H1, H2, Code, Table, Row, ExampleCode, Types } from "../components/StyledComponents";
import { Link } from "react-router-dom";

export const ButtonContent = () => (
  <Layout>
    <Container.Row>
      <H1>Button</H1>
      <p>
        Button <Code>{`<Button>`}</Code> component brings to the developers the possibility to customize
        all buttons in their project in the same place or customize each element separately, this
        component renders an <Code>{`<button>`}</Code> HTML element.
      </p>
      <ExampleCode lang="javascript">{`import { Button } from "zeeck-ui";`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Default</H2>
      <p>
        The default Button color it's the primary color defined in the theme config.
      </p>
      <p>
        <Button>Default</Button>
      </p>
      <ExampleCode>{`<div>
  <Button>Disabled</Button>
</div>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Disabled</H2>
      <p>You set a non usable <Code>Button</Code> with the <Code>disabled</Code> property.</p>
      <p>
        <Button disabled>Disabled</Button>
      </p>
      <ExampleCode>{`<div>
  <Button disabled>Disabled</Button>
</div>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Sizes</H2>
      <p>The <Code>Button</Code> component has 6 differents sizes.</p>
      <p>
        <Button size="xs">XS</Button>
      </p>
      <p>
        <Button size="sm">SM</Button>
      </p>
      <p>
        <Button size="md">MD</Button>
      </p>
      <p>
        <Button size="lg">LG</Button>
      </p>
      <p>
        <Button size="xl">XL</Button>
      </p>
      <p>
        <Button auto>auto</Button>
      </p>
      <ExampleCode>{`<p>
  <Button size="xs">XS</Button>
  <Button size="sm">SM</Button>
  <Button size="md">MD</Button>
  <Button size="lg">LG</Button>
  <Button size="xl">XL</Button>
  <Button auto>auto</Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Colors</H2>
      <p>The <Code>color</Code> property supports 5 solid colors variants and 5 differents gradients.</p>
      <p>
        <Button color="primary">Primary</Button>
      </p>
      <p>
        <Button color="secondary">Secondary</Button>
      </p>
      <p>
        <Button color="success">Success</Button>
      </p>
      <p>
        <Button color="warning">Warning</Button>
      </p>
      <p>
        <Button color="error">Error</Button>
      </p>
      <p>
        <Button color="gradients_primary">Gradient</Button>
      </p>
      <ExampleCode>{`<p>
  <Button color="primary">Primary</Button>
  <Button color="secondary">Secondary</Button>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="error">Error</Button>
  <Button color="gradients_primary">Gradient</Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Shadow</H2>
      <p>You can set a shadow for the <Code>Button</Code> component, this change depends of the <Code>color</Code> property, and disappears if the button it's disable.</p>
      <p>
        <Button color="primary" shadow>Primary</Button>
      </p>
      <p>
        <Button color="secondary" shadow>Secondary</Button>
      </p>
      <p>
        <Button color="success" shadow>Success</Button>
      </p>
      <p>
        <Button color="warning" shadow>Warning</Button>
      </p>
      <p>
        <Button color="error" shadow>Error</Button>
      </p>
      <p>
        <Button color="gradients_primary" shadow>Gradient</Button>
      </p>
      <ExampleCode>{`<p>
  <Button color="primary" shadow>Primary</Button>
  <Button color="secondary" shadow>Secondary</Button>
  <Button color="success" shadow>Success</Button>
  <Button color="warning" shadow>Warning</Button>
  <Button color="error" shadow>Error</Button>
  <Button color="gradients_primary" shadow>Gradient</Button>      
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Loading</H2>
      <p>The <Code>loading</Code> state removes the content button and you can choose 3 different animations.</p>
      <p>
        <Button color="primary" loading={1}>Loading</Button>
      </p>
      <p>
        <Button color="secondary" loading={2}>Loading</Button>
      </p>
      <p>
        <Button color="success" loading={3}>Loading</Button>
      </p>
      <p>
        <Button color="warning" loading={4}>Loading</Button>
      </p>
      <ExampleCode>{`<p>
  <Button color="primary" loading={1}>Loading</Button>
  <Button color="secondary" loading={2}>Loading</Button>
  <Button color="success" loading={3}>Loading</Button>
  <Button color="success" loading={4}>Loading</Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Rounded</H2>
      <p>The <Code>rounded</Code> property change the radius angles.</p>
      <p>
        <Button color="gradients_secondary" rounded>filled</Button>
      </p>
      <p>
        <Button variant="outlined" color="success" rounded>outlined</Button>
      </p>
      <p>
        <Button variant="flat" color="warning" rounded>text</Button>
      </p>
      <p>
        <Button variant="shadow" color="error" rounded>text</Button>
      </p>
      <ExampleCode>{`<p>
  <Button color="gradients_secondary" rounded>filled</Button>
  <Button variant="outlined" color="success" rounded>outlined</Button>
  <Button variant="flat" color="warning" rounded>text</Button>
  <Button variant="shadow" color="error" rounded>text</Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
      <p>The <Code>Button</Code> component has 5 different styles.</p>
      <p>
        <Button>filled</Button>
        <Button margin={2} color="gradients_secondary">filled</Button>
      </p>
      <p>
        <Button variant="outlined" color="secondary">outlined</Button>
        <Button margin={2} variant="outlined" color="gradients_success">outlined</Button>
      </p>
      <p>
        <Button variant="text" color="success">text</Button>
        <Button margin={2} variant="text" color="gradients_warning">text</Button>
      </p>
      <p>
        <Button variant="flat" color="success">text</Button>
        <Button margin={2} variant="flat" color="gradients_warning">text</Button>
      </p>
      <p>
        <Button variant="shadow" color="warning">text</Button>
        <Button margin={2} variant="shadow" color="gradients_error">text</Button>
      </p>
      <ExampleCode>{`<p>
  <Button>filled</Button>
  <Button color="gradients_secondary">filled</Button>
  <Button variant="outlined" color="secondary">outlined</Button>
  <Button variant="outlined" color="gradients_success">outlined</Button>
  <Button variant="text" color="success">text</Button>
  <Button variant="text" color="gradients_warning">text</Button>
  <Button variant="flat" color="success">text</Button>
  <Button variant="flat" color="gradients_warning">text</Button>
  <Button variant="shadow" color="warning">text</Button>
  <Button variant="shadow" color="gradients_error">text</Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Icons</H2>
      <p><strong>ZEECK-UI</strong> provides an icon collection and you can set any of them as a part of the button content.</p>
      <p>
        <Button icon="link">Icon link</Button>
      </p>
      <p>
        <Button
          color="success"
          icon="chevron-right"
          size="xl"
          variant="outlined">
        </Button>
      </p>
      <ExampleCode>{`<p>
  <Button icon="link">Icon link</Button>
  <Button
    color="success"
    icon="chevron-right"
    size="xl"
    variant="outlined">
  </Button>
</p>`}</ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Props</H2>
      <Table>
        <Row
          attribute="auto"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Remove the min-width attribute"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="color"
          type={<Code>string</Code>}
          values={<Anchor href="#colors">Button Colors</Anchor>}
          description="Change the button color"
          defaultValue={<Code>primary</Code>} />
        <Row
          attribute="disabled"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the status button"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="icon"
          type={<Code>string</Code>}
          values={<Anchor as={Link} to="/icons">Icons</Anchor>}
          description="Show an icon"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="loading"
          type={<Code>number</Code>}
          values="1,2,3"
          description="Show the loading animation"
          defaultValue={<Code>undefined</Code>} />
        <Row
          attribute="rounded"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the button border radius"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="shadow"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Add a shadow bellow of the button"
          defaultValue={<Code>false</Code>} />
        <Row
          attribute="size"
          type={<Code>string</Code>}
          values={<Anchor href="#sizes">Sizes</Anchor>}
          description="Display the underline text only in the hover status"
          defaultValue={<Code>md</Code>} />
        <Row
          attribute="variant"
          type={<Code>string</Code>}
          values={<Anchor href="#variants">Variant</Anchor>}
          description="Change the button style"
          defaultValue={<Code>filled</Code>} />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="Button colors options" constName="colors" id="colors"/>
      <Types title="Button sizes" constName="weights" id="sizes"/>
      <Types title="Button variants" constName="buttonVariants" id="variants"/>
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">Icons</Anchor>
    </Container.Row>
  </Layout>
);