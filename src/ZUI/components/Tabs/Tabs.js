import { Menu } from "./Menu";
import { Children, cloneElement } from "react";
import { TabProvider } from "./context";
import { TabList } from "./Tabs.styles";

export const Tabs = props => {
  let indexLoop = 0;
  let menuOptions = [];
  const childrenWithState = Children.map(props.children, child => {
    indexLoop++;
    menuOptions.push({
      title:  child.props.title,
      index: indexLoop,
      selected: indexLoop === 1,
    });
    return cloneElement(child, {tabid: indexLoop});
  });

  return (
    <TabProvider state={1}>
      <section>
        <Menu menuOptions={menuOptions} />
        <TabList>
          {childrenWithState}
        </TabList>
      </section>
    </TabProvider>
  )
}