import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const useCard = () => {
  const context = useContext(CartContext);
  if (context == undefined) {
    throw new Error("useCard must be used within on CardProvider");
  }
  return context;
};
