import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Anchor } from ".";

test("render content", () => {
  const component = render(<Anchor>Test</Anchor>);
  expect(component.container).toHaveTextContent("Test");
});