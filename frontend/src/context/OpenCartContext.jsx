import { createContext, useState } from "react";

export const OpenCartContext = createContext();

const OpenCartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const opeState = () => {
    setOpen(!open);
  };
  return (
    <OpenCartContext.Provider value={{ open, opeState }}>
      {children}
    </OpenCartContext.Provider>
  );
};

export default OpenCartProvider;
