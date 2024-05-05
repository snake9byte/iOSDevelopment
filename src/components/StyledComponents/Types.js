import { typesUI } from "./typesUI";
import { ExampleCode } from "./ExampleCode";

export const Types = ({title, constName, id}) => (
  <>
    <h3 id={id}>{title}</h3>
      <ExampleCode  lang='javascript' noCopy>
        {typesUI(constName, id)}
      </ExampleCode>
  </>
);