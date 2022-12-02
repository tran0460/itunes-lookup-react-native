import { createContext, useContext } from "react";

export const AppContext = createContext();

function useAppContext() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within a AppProvider");
  return context;
}

export { useAppContext };
