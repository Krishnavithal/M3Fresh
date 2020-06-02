import React, { createContext, useReducer, useEffect, useState } from "react";
import firbase from "firebase";

import "./App.css";
import { initFirebase } from "./firebase";
import { Routes } from "./routes";

import { storeStocks } from "./Store";

initFirebase();

export const StoreContext = createContext();

export const CartContext = createContext();

const initialStocks = {
  stocks: [],
  cart: {},
  loading: 100,
};

function App() {
  const store = useReducer(storeStocks, initialStocks);
  const [state, dispatch] = store;
  const cart = useState({});

  useEffect(() => {
    dispatch({ type: "FETCHING" });
    firbase
      .database()
      .ref("stock")
      .once("value")
      .then((snapshot) => {
        dispatch({
          type: "FETCHED",
          stocks: snapshot.val(),
        });
      });
  }, []);
  console.log(state);
  return (
    <CartContext.Provider value={cart}>
      <StoreContext.Provider value={store}>
        <Routes />
      </StoreContext.Provider>
    </CartContext.Provider>
  );
}

export default App;
