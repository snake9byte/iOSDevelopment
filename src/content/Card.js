import { Anchor, Card, Container, Grid, Tabs, Button } from "../ZUI";
import { Layout } from "../components/Layout";
import {
  H1,
  H2,
  Code,
  Table,
  Row,
  ExampleCode,
  Types,
} from "../components/StyledComponents";
import { images } from "../img";

export const CardContent = () => (
  <Layout>
    <Container.Row>
      <H1>Card</H1>
      <p>
        Cards <Code>Card</Code> can be used to display simple content like text
        or images, you can also use layouts for complex content.
      </p>
      <ExampleCode lang="javascript">
        {`import { Card } from "zeeck-ui";`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Basic card</H2>
      <Card style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}>
        <p>Text card</p>
      </Card>
      <ExampleCode>
        {`<Card>
  <p>Text card</p>
</Card>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
      <p>
        The <Code>Card</Code> component has 3 different styles.
      </p>
      <Card
        variant="shadow"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Shadow Card</p>
      </Card>
      <Card
        variant="bordered"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Bordered Card</p>
      </Card>
      <br />
      <Card
        variant="dense"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Dense Card</p>
      </Card>
      <ExampleCode>
        {`<Grid>
  <Grid.Item>
    <Card variant="shadow">
      <p>Text card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card variant="bordered">
      <p>Text card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card variant="dense">
      <p>Text card</p>
    </Card>
  </Grid.Item>
</Grid>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Colors</H2>
      <p>
        You can change the color background with the <Code>color</Code>{" "}
        property, this configuration also change the font to white.
      </p>
      <Card
        color="primary"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Primary color Card</p>
      </Card>
      <Card
        color="secondary"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Primary color Card</p>
      </Card>
      <Card
        color="success"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Primary color Card</p>
      </Card>
      <Card
        color="warning"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Primary color Card</p>
      </Card>
      <Card
        color="error"
        style={{ marginBottom: "var(--ZUI-sizes_spacing_5)" }}
      >
        <p>Primary color Card</p>
      </Card>
      <ExampleCode>
        {`<Grid>
  <Grid.Item>
    <Card color="primary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="secondary">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="success">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="warning">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
  <Grid.Item>
    <Card color="error">
      <p>Primary color Card</p>
    </Card>
  </Grid.Item>
</Grid>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Cover</H2>
      <p>
        You can set some content as a background of the <Code>card</Code>, the{" "}
        <Code>cover</Code> property allows you to set an image or other
        component as background
      </p>
      <Grid>
        <Grid.Item xs={12} sm={6} md={4}>
          <Card cover={images.cover01}>
            <Card.Body>
              <h3
                style={{
                  fontSize: ".75rem",
                  opacity: 0.5,
                }}
              >
                Some cool content
              </h3>
              <h1
                style={{
                  marginTop: 0,
                  fontSize: "3rem",
                }}
              >
                Big title
              </h1>
            </Card.Body>
          </Card>
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4}>
          <Card cover="https://www.webivm.com/wp-content/uploads/2016/12/Free-Stock-Images.jpg">
            <Card.Body
              style={{ textAlign: "center", textShadow: "0px 0px 8px black" }}
            >
              <h2>Big title</h2>
              <h3>Medium sub title</h3>
            </Card.Body>
          </Card>
        </Grid.Item>
        <Grid.Item xs={12} sm={6} md={4}>
          <Card
            cover={
              <div
                style={{
                  background: `linear-gradient(45deg, #d53369 0%, #daae51 100%)`,
                  height: "100%",
                }}
              >
                <img
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "90%",
                  }}
                  src={images.cover02}
                  alt="cover"
                />
              </div>
            }
          >
            <Card.Body>
              <h2
                style={{
                  textAlign: "right",
                  margin: "3rem 0 4rem auto",
                  maxWidth: "50%",
                }}
              >
                Some cool title
              </h2>
            </Card.Body>
          </Card>
        </Grid.Item>
      </Grid>
      <Tabs>
        <Tabs.Tab title="Card 1">
          <ExampleCode>
            {`<Card cover={images.cover01}>
  <Card.Body >
    <h3 style={{
      fontSize: ".75rem",
      opacity: .5,
    }}>Some cool content</h3>
    <h1 style={{
      marginTop: 0,
      fontSize: "3rem",
    }}>Big title</h1>
  </Card.Body>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Card 2">
          <ExampleCode>
            {`<Card cover="https://www.webivm.com/wp-content/uploads/2016/12/Free-Stock-Images.jpg">
  <Card.Body style={{ textAlign: "center", textShadow: "0px 0px 8px black" }}>
    <h2>Big title</h2>
    <h3>Medium sub title</h3>
  </Card.Body>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Card 3">
          <ExampleCode>
            {`<Card cover={<div style={{
  background: "linear-gradient(45deg, #d53369 0%, #daae51 100%)",
  height: "100%"
}}>
  <img style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "90%"
  }} src={images.cover02} alt="cover picture"/>
</div>}>
  <Card.Body>
    <h2 style={{textAlign: "right", margin: "3rem 0 4rem auto", maxWidth: "50%"}}>
      Some cool title
    </h2>
  </Card.Body>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
      </Tabs>
    </Container.Row>
    <Container.Row>
      <H2>Header component</H2>
      <p>This component can be used for set a card title.</p>
      <Card>
        <Card.Header>Card title</Card.Header>
        Card content
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Footer component</H2>
      <p>This component is designed to add a footer card.</p>
      <Card>
        Card content
        <Card.Footer>Card title</Card.Footer>
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Body component</H2>
      <p>
        This component can be used to add styles and custom behaviors, is not
        required but can help to maintain a cleaner code.
      </p>
      <Card>
        <Card.Header>Card title</Card.Header>
        <Card.Body>Card content</Card.Body>
        <Card.Footer>Card title</Card.Footer>
      </Card>
    </Container.Row>
    <Container.Row>
      <H2>Header and Footer variants</H2>
      <p>
        The <Code>Header</Code> and <Code>Footer</Code> components has 3
        differents styles.
      </p>
    </Container.Row>
    <Container.Row>
      <Grid>
        <Grid.Item xs={4}>
          <h3>Transparent</h3>
          <Card>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <h3>Bordered</h3>
          <Card bordered>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <h3>Ghost</h3>
          <Card ghost>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <Card cover={images.cover01}>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <Card bordered cover={images.cover01}>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={4}>
          <Card ghost cover={images.cover01}>
            <Card.Header>Card title</Card.Header>
            <Card.Body>Card content</Card.Body>
            <Card.Footer>Card title</Card.Footer>
          </Card>
        </Grid.Item>
      </Grid>
      <Tabs>
        <Tabs.Tab title="Transparent">
          <ExampleCode>
            {`<Card>
  <Card.Header>
    Card title
  </Card.Header>
  <Card.Body>
    Card content
  </Card.Body>
  <Card.Footer>
    Card title
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Bordered">
          <ExampleCode>
            {`<Card bordered>
  <Card.Header>
    Card title
  </Card.Header>
  <Card.Body>
    Card content
  </Card.Body>
  <Card.Footer>
    Card title
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Ghost">
          <ExampleCode>
            {`<Card ghost>
  <Card.Header>
    Card title
  </Card.Header>
  <Card.Body>
    Card content
  </Card.Body>
  <Card.Footer>
    Card title
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
      </Tabs>
    </Container.Row>
    <Container.Row>
      <H2>Clickable</H2>
      <Grid>
        <Grid.Item xs={3}>
          <Card
            clickable
            ghost
            ghost_color="gray_1"
            ghost_opacity={0.75}
            cover={
              <div
                style={{
                  background: "var(--ZUI-gradients_primary_warning)",
                  height: "100%",
                }}
              ></div>
            }
          >
            <Card.Body>
              <div style={{ height: "4rem" }}></div>
            </Card.Body>
            <Card.Footer>
              <Container
                gap={0}
                justify="space-between"
                alignItems="center"
                flex
              >
                <span>$10.00</span>
                <Button auto variant="flat" color="success">
                  Buy
                </Button>
              </Container>
            </Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={3}>
          <Card
            clickable
            ghost
            ghost_color="gray_1"
            ghost_opacity={0.75}
            cover={
              <div
                style={{
                  background: "var(--ZUI-gradients_success_error)",
                  height: "100%",
                }}
              ></div>
            }
          >
            <Card.Body>
              <div style={{ height: "4rem" }}></div>
            </Card.Body>
            <Card.Footer>
              <Container
                gap={0}
                justify="space-between"
                alignItems="center"
                flex
              >
                <span>$10.00</span>
                <Button auto variant="flat" color="success">
                  Buy
                </Button>
              </Container>
            </Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={3}>
          <Card
            clickable
            ghost
            ghost_color="gray_1"
            ghost_opacity={0.75}
            cover={
              <div
                style={{
                  background: "var(--ZUI-gradients_primary_secondary)",
                  height: "100%",
                }}
              ></div>
            }
          >
            <Card.Body>
              <div style={{ height: "4rem" }}></div>
            </Card.Body>
            <Card.Footer>
              <Container
                gap={0}
                justify="space-between"
                alignItems="center"
                flex
              >
                <span>$10.00</span>
                <Button auto variant="flat" color="success">
                  Buy
                </Button>
              </Container>
            </Card.Footer>
          </Card>
        </Grid.Item>
        <Grid.Item xs={3}>
          <Card
            clickable
            ghost
            ghost_color="gray_1"
            ghost_opacity={0.75}
            cover={
              <div
                style={{
                  background: "var(--ZUI-gradients_error_warning)",
                  height: "100%",
                }}
              ></div>
            }
          >
            <Card.Body>
              <div style={{ height: "4rem" }}></div>
            </Card.Body>
            <Card.Footer>
              <Container
                gap={0}
                justify="space-between"
                alignItems="center"
                flex
              >
                <span>$10.00</span>
                <Button auto variant="flat" color="success">
                  Buy
                </Button>
              </Container>
            </Card.Footer>
          </Card>
        </Grid.Item>
      </Grid>
      <Tabs>
        <Tabs.Tab title="Card 1">
          <ExampleCode>
            {`<Card clickable ghost ghost_color="gray_1" ghost_opacity={.75}
  cover={<div style={{
    background: "var(--ZUI-gradients_primary_warning)",
    height: "100%"
  }}></div>}>
  <Card.Body>
    <div style={{height: "4rem"}}></div>
  </Card.Body>
  <Card.Footer>
    <Container gap={0} justify="space-between" alignItems="center" flex>
      <span>$10.00</span>
      <Button auto variant="flat" color="success">Buy</Button>
    </Container>
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Card 2">
          <ExampleCode>
            {`<Card clickable ghost ghost_color="gray_1" ghost_opacity={.75}
  cover={<div style={{
    background: "var(--ZUI-gradients_success_error)",
    height: "100%"
  }}></div>}>
  <Card.Body>
    <div style={{height: "4rem"}}></div>
  </Card.Body>
  <Card.Footer>
    <Container gap={0} justify="space-between" alignItems="center" flex>
      <span>$10.00</span>
      <Button auto variant="flat" color="success">Buy</Button>
    </Container>
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Card 3">
          <ExampleCode>
            {`<Card clickable ghost ghost_color="gray_1" ghost_opacity={.75}
  cover={<div style={{
    background: "var(--ZUI-gradients_primary_secondary)",
    height: "100%"
  }}></div>}>
  <Card.Body>
    <div style={{height: "4rem"}}></div>
  </Card.Body>
  <Card.Footer>
    <Container gap={0} justify="space-between" alignItems="center" flex>
      <span>$10.00</span>
      <Button auto variant="flat" color="success">Buy</Button>
    </Container>
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
        <Tabs.Tab title="Card 4">
          <ExampleCode>
            {`<Card clickable ghost ghost_color="gray_1" ghost_opacity={.75}
  cover={<div style={{
    background: "var(--ZUI-gradients_error_warning)",
    height: "100%"
  }}></div>}>
  <Card.Body>
    <div style={{height: "4rem"}}></div>
  </Card.Body>
  <Card.Footer>
    <Container gap={0} justify="space-between" alignItems="center" flex>
      <span>$10.00</span>
      <Button auto variant="flat" color="success">Buy</Button>
    </Container>
  </Card.Footer>
</Card>`}
          </ExampleCode>
        </Tabs.Tab>
      </Tabs>
    </Container.Row>
    <Container.Row>
      <H2>Props</H2>
      <Table>
        <Row
          attribute="bordered"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the card styles"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="bordered_color"
          type={<Code>string</Code>}
          values={<Anchor href="#borderSize">Border sizes</Anchor>}
          description="Change the Header and Footter border size"
          defaultValue={<Code>sm</Code>}
        />
        <Row
          attribute="bordered_weigth"
          type={<Code>string</Code>}
          values={<Anchor href="#colorOptions">Colors options</Anchor>}
          description="Change the Header and Footter border color"
          defaultValue={<Code>gray_3</Code>}
        />
        <Row
          attribute="clickable"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Adds animations to hover and active states"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="color"
          type={<Code>string</Code>}
          values={<Anchor href="#colors">colors</Anchor>}
          description="Change the card style"
          defaultValue={<Code>shadow</Code>}
        />
        <Row
          attribute="cover"
          type={
            <>
              <Code>string</Code> <Code>ReactNode</Code>
            </>
          }
          values="-"
          description="Set the cover card section"
          defaultValue="-"
        />
        <Row
          attribute="ghost"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Change the card styles"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="ghost_color"
          type={<Code>string</Code>}
          values={<Anchor href="#colorOptions">Colors options</Anchor>}
          description="Change the background color of the Header and Footer"
          defaultValue={<Code>gray_5</Code>}
        />
        <Row
          attribute="ghost_opacity"
          type={<Code>number</Code>}
          values="Any number between 0 and 1"
          description="Change the Header and Footter opacity background"
          defaultValue={<Code>.1</Code>}
        />
        <Row
          attribute="variant"
          type={<Code>string</Code>}
          values={<Anchor href="#variants">variants</Anchor>}
          description="Change the card style"
          defaultValue={<Code>shadow</Code>}
        />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types title="Color cards" constName="variants" id="colors" />
      <Types title="Border options" constName="weights" id="borderSize" />
      <Types title="Card variants" constName="cardsVariants" id="variants" />
      <Types title="Colors options" constName="allColors" id="colorOptions" />
    </Container.Row>
  </Layout>
);
