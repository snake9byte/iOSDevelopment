import { Layout } from "../components/Layout";
import { Container, useThemeContext, Card, Grid } from "../ZUI";
import { H1, Code, H2, ExampleCode } from "../components/StyledComponents";

export const Core = () => {
  const { theme } = useThemeContext();
  const namedColors = [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "gray",
  ];
  const baseColors = [
    "blue",
    "cyan",
    "gray",
    "green",
    "orange",
    "purple",
    "pink",
    "red",
    "yellow",
  ];
  let colorNumbers = [];

  for (let index = 1; index < 10; index++) colorNumbers.push(index * 100);

  return (
    <Layout>
      <Container.Row>
        <H1>Core theme</H1>
        <p>
          ZEECK-UI has a core theme that contains all the necessary properties
          for themes to work.
        </p>
        <p>
          When you create a new theme, the function <Code>CreateTheme</Code>{" "}
          takes the core theme as a template, this is why you don't need to add
          all the theme fields to create a new theme.
        </p>
      </Container.Row>
      <Container.Row>
        <H2>Colors</H2>
        <p>
          The ZEECK-UI Core theme includes a collection of colors that you can
          customize or use in your JS files sent as a <Code>property</Code> or
          in your CSS files as a <Code>variable</Code>.
        </p>
        <Card style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}>
          <span style={{ color: theme.colors.blue500 }}>Blue text </span>
          <span style={{ color: "var(--ZUI-colors_red500)" }}>Red text</span>
        </Card>
        <ExampleCode lang="javascript">
          {`import { useThemeContext } from "zeeck-ui";

const newComponent = () => {
  const { theme } = useThemeContext();

  return (
    <Card>
      <span style={{color: theme.colors.blue500}}>Blue text </span>
      <span style={{color: "var(--ZUI-colors_red500)"}}>Red text</span>
    </Card>
  )
}`}
        </ExampleCode>
      </Container.Row>
      <Container.Row>
        <H2>Named colors</H2>
        <Grid style={{ color: "#fff" }}>
          {namedColors.map((color) => (
            <Grid.Item xs={4} sm={3} lg={2} key={`namedColor${color}`}>
              <Card style={{ backgroundColor: theme.colors[color] }}>
                {color}
                <br />
                {theme.colors[color]}
              </Card>
            </Grid.Item>
          ))}
        </Grid>
      </Container.Row>
      <Container.Row>
        <H2>Base colors</H2>
        {baseColors.map((color) => (
          <Grid key={`baseColor${color}`}>
            <Grid.Item xs={12}>
              <h3>{color.toUpperCase()}</h3>
            </Grid.Item>
            {colorNumbers.map((number, index) => {
              let newBaseColor = `${color}${number}`;
              return (
                <Grid.Item
                  xs={4}
                  sm={3}
                  lg={2}
                  key={`numberColor${newBaseColor}`}
                >
                  <Card
                    style={{
                      backgroundColor: theme.colors[newBaseColor],
                      color: index < 5 ? "#000" : "#fff",
                    }}
                  >
                    {newBaseColor}
                    <br />
                    {theme.colors[newBaseColor]}
                  </Card>
                </Grid.Item>
              );
            })}
          </Grid>
        ))}
      </Container.Row>
    </Layout>
  );
};
