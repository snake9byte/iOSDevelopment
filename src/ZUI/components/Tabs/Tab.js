import { TabUI } from "./Tabs.styles";
import { useTabContext } from "./context";

export const Tab = props => {
  const { state } = useTabContext();

  return (
    <TabUI state={props.tabid === state}>
      {props.children}
    </TabUI>
  )
}