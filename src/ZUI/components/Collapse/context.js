import { createContext, useContext, useState } from "react";

export const CollapseState = createContext();

export const CollapseProvider = ({ state, children }) => {
  const currentState = useCollapse(state);
  return (
    <CollapseState.Provider value={ currentState }>
      {children}
    </CollapseState.Provider>
  )
};

export const useCollapseContext = () => useContext(CollapseState);

const useCollapse = thisCollapse => {
  const [state, setState] = useState(thisCollapse);

  const setNewState = item => {
    const newState = {...state};
    if (state.accordion) {
      if (state.expanded[0] === item) newState.expanded.splice(0, 1, false);
      else  newState.expanded.splice(0, 1, item);
    } else {
      const idIndex = state.expanded.findIndex(id => id === item);
      if(idIndex >= 0) newState.expanded.splice(idIndex, 1);
      else newState.expanded.push(item);
    }
    setState({...state, ...newState});
  }

  return { state, setNewState };
}