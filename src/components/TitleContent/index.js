import { Container } from "../../ZUI";
import { H1, ExampleCode } from "../StyledComponents";

export const TitleContent = ({title, children}) => (
  <Container.Row>
    <H1>{title}</H1>
    <p>{children}</p>
    <ExampleCode lang="javascript">
      {`import { ${title} } from "zeeck-ui";`}
    </ExampleCode>
  </Container.Row>
) 