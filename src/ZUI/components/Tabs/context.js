import { createContext, useContext, useState } from "react";

export const TabState = createContext();

export const TabProvider = ({ state, children }) => {
  const currentState = useTab(state);

  return (
    <TabState.Provider value={currentState}>
      {children}
    </TabState.Provider>
  )
};

export const useTabContext = () => useContext(TabState);

const useTab = thisTab => {
  const [state, setState] = useState(thisTab);

  const setNewState = item => setState(item);

  return { state, setNewState };
}