import { Layout } from "../components/Layout";
import { H1, H2, Code, ExampleCode } from "../components/StyledComponents";
import { Container } from "../ZUI";

export const Home = () => (
  <Layout id="HomeContent">
    <Container.Row>
      <H1>Getting started</H1>
      <p>
        ZEECK-UI allows you to build beautiful, modern, and fast applications regardless of your design experience, created with React.js and Styled components.
      </p>
    </Container.Row>
    <Container.Row>
      <H2>Installation</H2>
      <ExampleCode lang="javascript">
        {`npm install zeeck-ui`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Setup</H2>
      <p>This is the only required module, in your main component you need to import the <Code>Styles</Code> module.</p>
      <ExampleCode lang="javascript">
        {`import { Styles } from "zeeck-ui";

export const MainComponent = () => {
  return (
    <>
      <Styles />
      //your code
    </>
  )
};`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Using ZEECK-UI</h3>
      <p>Once ZEEK-UI is installed as a dependency in your project, you can import the components as in the following example:</p>
      <ExampleCode lang="javascript">{`import { Grid, Avatar, Anchor } from 'zeeck-ui';`}</ExampleCode>
      <p>Then, you can use those components in your project like:</p>
      <ExampleCode>{`<Grid.Container>
  <Grid.Item>
    <Avatar text="OP" bg_color="primary" />
  </Grid.Item>
  <Grid.Item>
    <Anchor href="#" box>
      Lorem ipsum dolor sit amet (Box)
    </Anchor>
  </Grid.Item>
</Grid.Container>`}</ExampleCode>
    </Container.Row>
  </Layout>
)