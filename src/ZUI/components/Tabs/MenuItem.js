import { useTabContext } from "./context";
import { ButtonMenu } from "./Tabs.styles";

export const MenuItem = props => {
  const { state, setNewState } = useTabContext();

  return (
    <li>
      <ButtonMenu state={props.tabid === state} onClick={() => setNewState(props.tabid)}>
        {props.children}
      </ButtonMenu>
    </li>
  )
}