import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import {
  OrdersContainer,
  OrdersHeading,
  NextContainer,
  CartTotalHeading,
  CartTotal,
  NextButton,
} from "./styledComponents";

import OrderItem from "./OrderItem";
import Navbar from "../Navbar";

import { StoreContext } from "../../App";
import { goToDeliveryDetailsPage } from "../../utils/RouteUtils";

function OrderDetailsPage(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(StoreContext);

  const getTotalCost = () => {
    const costArray = Object.values(state.cart).map(
      (cartItem) => state.stocks[cartItem.productId].price * cartItem.quantity
    );
    return costArray.reduce((total, currentValue) => total + currentValue, 0);
  };

  return (
    <>
      <Navbar heading={"Order Summary"} />
      <OrdersContainer>
        {Object.values(state.cart).map((cartItem) => {
          return (
            <OrderItem
              image={state.stocks[cartItem.productId].product_image}
              itemName={state.stocks[cartItem.productId].product_name}
              price={state.stocks[cartItem.productId].price}
              quantity={cartItem.quantity}
              unit={state.stocks[cartItem.productId].units}
              increment={() => {
                dispatch({
                  type: "INCREMENT_CART_ITEM",
                  productId: cartItem.productId,
                });
              }}
              decrement={() => {
                dispatch({
                  type: "DECREMENT_CART_ITEM",
                  productId: cartItem.productId,
                });
                if (state.cart[cartItem.productId].quantity === 1) {
                  dispatch({
                    type: "DELETE_CART_ITEM",
                    productId: cartItem.productId,
                  });
                }
              }}
              onDelete={() => {
                dispatch({
                  type: "DELETE_CART_ITEM",
                  productId: cartItem.productId,
                });
              }}
            />
          );
        })}
      </OrdersContainer>
      {Object.values(state.cart).length > 0 && (
        <NextContainer>
          <CartTotalHeading>
            Total: <CartTotal> ₹ {getTotalCost()}</CartTotal>
          </CartTotalHeading>
          <NextButton onClick={() => goToDeliveryDetailsPage(history)}>
            Continue
          </NextButton>
        </NextContainer>
      )}
    </>
  );
}

export default OrderDetailsPage;
