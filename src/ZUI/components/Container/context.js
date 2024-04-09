import { createContext, useContext, useState } from "react";

export const ContainerState = createContext();

export const ContainerProvider = ({ state, children }) => {
  const currentState = useContainer(state);

  return (
    <ContainerState.Provider value={ currentState }>
      {children}
    </ContainerState.Provider>
  )
};

export const useContainerContext = () => useContext(ContainerState);

const useContainer = thisCollapse => {
  const [state] = useState(thisCollapse);

  return { state };
}