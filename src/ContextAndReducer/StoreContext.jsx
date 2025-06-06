import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./reducer";

export const StoreContextx = createContext({});

function StoreProvider({ children }) {
  //useReducer
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToCart = (product) => {
    // Check if product is already in the cart
    const existingProductIndex = state.products.findIndex(
      (item) => item.id === product.id
    );

    let updatedCart;

    if (existingProductIndex >= 0) {
      // If product already exists in cart, increase its quantity
      updatedCart = [...state.products]; //cart remain same, quantity will be increased
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...state.products, { ...product, quantity: 1 }]; // This line adds quantity property for new items
    }

    updatedPrice(updatedCart); //For Every Add, update price

    dispatch({
      type: "ADD",
      payload: updatedCart,
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatedPrice(updatedCart); //For Every Remove, update prce
    dispatch({
      type: "REMOVE",
      payload: updatedCart,
    });
  };

  const updatedPrice = (product) => {
    //product parameter is getting an Array of products
    let total = 0;
    product.forEach((element) => {
      total += element.price * element.quantity;
    });

    dispatch({
      type: "UPDATEPRICE",
      payload: total,
    });
  };

  const value = {
    total: state.total, //to get total price
    products: state.products, //for display array of products in the Cart
    addToCart, //for use Add to cart function
    removeFromCart, //for use Remove from cart function
  };

  return (
    <StoreContextx.Provider value={value}>{children}</StoreContextx.Provider>
  );
}

export default StoreProvider;
