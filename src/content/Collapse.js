import { Collapse, Container, Avatar } from "../ZUI";
import { Anchor } from "../ZUI";
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
import { Link } from "react-router-dom";
import { img } from "../constant";

export const CollapseContent = () => (
  <Layout>
    <Container.Row>
      <H1>Collapse</H1>
      <p>
        The <Code>Collapse</Code> component allows the user to show and hide
        portions of content in the application.
      </p>
      <ExampleCode lang="javascript">
        {`import { Collapse } from "zeeck-ui";`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Basic collapse</H2>
      <p>
        All <Code>Collapse</Code> component needs at least one{" "}
        <Code>Collapse.Item</Code>.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A">
            1 Lorem ipsum dolor sit amet
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Disable accordion property</H2>
      <p>
        If you disable the <Code>accordion</Code> property you can show multiple
        items at the same time
      </p>
      <Container>
        <Collapse accordion={false}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse accordion={false}>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Initial expanded</H2>
      <p>
        You can set a <Code>expanded</Code> item by default.
      </p>
      <Container>
        <Collapse expanded={1}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse expanded={1}>
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Subtitle</H2>
      <p>
        You can set a <Code>subtitle</Code> that will appear below the title.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A" subTitle="Subtitle A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B" subTitle="Subtitle B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C" subTitle="Subtitle C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse expanded={1}>
  <Collapse.Item title="Title A" subTitle="Subtitle A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B" subTitle="Subtitle B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C" subTitle="Subtitle C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Variants</H2>
    </Container.Row>
    <Container.Row>
      <h3>Filled</h3>
      <Container>
        <Collapse variant="filled">
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse variant="filled">
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Bordered</h3>
      <Container>
        <Collapse variant="bordered">
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse variant="bordered">
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <h3>Splitted</h3>
      <Container>
        <Collapse variant="splitted">
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse variant="splitted">
  <Collapse.Item title="Title A">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Custom arrow</H2>
      <p>
        You can set a custom icon with the property <Code>icon</Code>.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A" icon="chevron-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse>
  <Collapse.Item title="Title A" icon="chevron-left">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Content side</H2>
      <p>
        You can set content at the left of the title with the property{" "}
        <Code>side_content</Code>.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item
            title="Title A"
            subTitle="Subtitle A"
            side_content={<Avatar text="JS" />}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
              venenatis lectus magna fringilla urna porttitor rhoncus dolor
              purus. Ornare quam viverra orci sagittis eu volutpat odio
              facilisis. Quis ipsum suspendisse ultrices gravida dictum. Amet
              mattis vulputate enim nulla. Gravida arcu ac tortor dignissim
              convallis aenean et. Arcu non sodales neque sodales ut. Nam libero
              justo laoreet sit amet cursus sit amet. Senectus et netus et
              malesuada fames. Leo a diam sollicitudin tempor id. Amet justo
              donec enim diam vulputate ut pharetra sit amet. Fermentum iaculis
              eu non diam. Praesent semper feugiat nibh sed.
            </p>
          </Collapse.Item>
          <Collapse.Item
            title="Title A"
            subTitle="Subtitle A"
            side_content={
              <Avatar
                img_src={img.avatar01}
                bordered
                border_weight="sm"
                bg_color="secondary"
                zoom
                squared
                pointer
              />
            }
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
              venenatis lectus magna fringilla urna porttitor rhoncus dolor
              purus. Ornare quam viverra orci sagittis eu volutpat odio
              facilisis. Quis ipsum suspendisse ultrices gravida dictum. Amet
              mattis vulputate enim nulla. Gravida arcu ac tortor dignissim
              convallis aenean et. Arcu non sodales neque sodales ut. Nam libero
              justo laoreet sit amet cursus sit amet. Senectus et netus et
              malesuada fames. Leo a diam sollicitudin tempor id. Amet justo
              donec enim diam vulputate ut pharetra sit amet. Fermentum iaculis
              eu non diam. Praesent semper feugiat nibh sed.
            </p>
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse>
  <Collapse.Item title="Title A" subTitle="Subtitle A" side_content={<Avatar text="JS" />}>
    <p>
      ... your content ...
    </p>
  </Collapse.Item>
  <Collapse.Item title="Title A" subTitle="Subtitle A" side_content={<Avatar img_src={img.avatar01} bordered border_weight="sm" bg_color="secondary" zoom squared pointer/>}>
    <p>
      ... your content ...
    </p>
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Disable divider</H2>
      <p>
        You can remove the line between items changing to false the{" "}
        <Code>divider</Code> property.
      </p>
      <Container>
        <Collapse divider={false}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse divider={false}>
  <Collapse.Item title="Title A">
  ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Divider weight</H2>
      <p>
        You can change the weight line between items changing the{" "}
        <Code>divider_weight</Code> property.
      </p>
      <Container>
        <Collapse divider_weight="md">
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <Container>
        <Collapse divider_weight="xl" variant="bordered">
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse divider={false}>
  <Collapse.Item title="Title A">
  ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Disable item</H2>
      <p>
        You can disable items setting the <Code>disable</Code> property in the
        item.
      </p>
      <Container>
        <Collapse>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B" disabled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse>
  <Collapse.Item title="Title A">
  ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B" disabled>
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Animation</H2>
      <p>
        You can disable the animations with the <Code>animation</Code> property.
      </p>
      <Container>
        <Collapse animation={false}>
          <Collapse.Item title="Title A">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title B">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
          <Collapse.Item title="Title C">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Collapse.Item>
        </Collapse>
      </Container>
      <ExampleCode>
        {`<Collapse animation={false}>
  <Collapse.Item title="Title A">
  ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title B">
    ... your content ...
  </Collapse.Item>
  <Collapse.Item title="Title C">
    ... your content ...
  </Collapse.Item>
</Collapse>`}
      </ExampleCode>
    </Container.Row>
    <Container.Row>
      <H2>Props</H2>
      <Table>
        <Row
          attribute="animation"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Remove the animations"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="accordion"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Allow displaying more than one open item at the same time"
          defaultValue={<Code>true</Code>}
        />
        <Row
          attribute="disable"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Disable item"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="divider"
          type={<Code>boolean</Code>}
          values={<Code>true/false</Code>}
          description="Removes the border between elements"
          defaultValue={<Code>true</Code>}
        />
        <Row
          attribute="divider_weight"
          type={<Code>string</Code>}
          values={<Anchor href="#weights">Weights</Anchor>}
          description="Change the weight in the border between elements"
          defaultValue={<Code>xs</Code>}
        />
        <Row
          attribute="expanded"
          type={<Code>number</Code>}
          values={
            "Must be the index number of the item (the count starts with 1)"
          }
          description="Shows an item open by default"
          defaultValue="-"
        />
        <Row
          attribute="icon"
          type={<Code>string</Code>}
          values={
            <Anchor as={Link} to="/icons">
              Icons
            </Anchor>
          }
          description="Show an icon"
          defaultValue={<Code>false</Code>}
        />
        <Row
          attribute="side_content"
          type={<Code>ReactNode</Code>}
          values="-"
          description="Left content"
          defaultValue="-"
        />
        <Row
          attribute="subtitle"
          type={<Code>string</Code>}
          values="-"
          description="Subtitle"
          defaultValue="-"
        />
        <Row
          attribute="variant"
          type={<Code>variants</Code>}
          values={<Anchor href="#variants">Variants</Anchor>}
          description="Change the visual style"
          defaultValue={<Code>default</Code>}
        />
      </Table>
    </Container.Row>
    <Container.Row>
      <H2>Types</H2>
      <Types
        title="variant options"
        constName="collapseVariants"
        id="variants"
      />
      <Types title="weight options" constName="weights" id="weights" />
    </Container.Row>
    <Container.Row>
      <h3 id="icons">Icons</h3>
      <Anchor as={Link} to="/icons">
        Icons
      </Anchor>
    </Container.Row>
  </Layout>
);
