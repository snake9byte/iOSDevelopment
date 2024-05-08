// import Highlight from "react-highlight";
import { Container, Button, Card } from "../../ZUI";
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeTheme } from "../../styles/codeTheme";

export const ExampleCode = ({children, lang, noCopy}) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <Card>
      {/* <Container flex gap={0}>
        <Container.Row size={12}>
          <Highlight language={lang}>{children}</Highlight>
        </Container.Row>
        {!noCopy && <Container.Row size="auto">
          <Button size="xs" variant="text" style={{marginTop: "10px"}} onClick={() => handleClick()}>
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </Container.Row>}
      </Container> */}
      <Container flex gap={0}>
        <Container.Row size={12}>
        <SyntaxHighlighter language="javascript" style={codeTheme}>
          {children}
        </SyntaxHighlighter>
        </Container.Row>
        {!noCopy && <Container.Row size="auto">
          <Button size="xs" variant="text" style={{marginTop: "10px"}} onClick={() => handleClick()}>
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </Container.Row>}
      </Container>
    </Card>
  )
}

ExampleCode.defaultProps = {
  lang: "jsx",
}