import { createContext, useContext, useState } from "react";

export const CardState = createContext();

export const CardProvider = ({ state, children }) => {
  const currentState = useCard(state);

  return (
    <CardState.Provider value={ currentState }>
      {children}
    </CardState.Provider>
  )
};

export const useCardContext = () => useContext(CardState);

const useCard = thisCollapse => {
  const [state] = useState(thisCollapse);

  return { state };
}