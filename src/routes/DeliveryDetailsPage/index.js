import React, { useContext, useState } from "react";
import firebase from "firebase";

import { StoreContext } from "../../App";
import UserDetailForm from "../../components/UserDetailForm";
import { networkCallStatus } from "../../utils/CommonUtils";

function DeliveryDetailsPage() {
  const [state] = useContext(StoreContext);
  const [orderStatus, setOrderStatus] = useState(networkCallStatus.initial);
  const [orderId, setOrderId] = useState("");
  const sendOrderToFirebase = (userDetails) => {
    const baseOrdersReference = firebase.database().ref("orders");
    const orderRef = baseOrdersReference.push();
    const order = {
      cart: state.cart,
      ...userDetails,
      orderId: orderRef.key,
      orderedProductDetails: Object.values(state.cart).map((item) => {
        return {
          name: state.stocks[item.productId].product_name,
          quantity: item.quantity,
          price: state.stocks[item.productId].price,
          units: state.stocks[item.productId].units,
        };
      }),
      timeStamp: Date.now(),
      status: "SUBMITTED",
    };
    setOrderId(orderRef.key);
    setOrderStatus(networkCallStatus.loading);
    orderRef.set(order, (error) => {
      if (error) {
        console.log("Order Data could not be saved.", error);
        setOrderStatus(networkCallStatus.failure);
      } else {
        setOrderStatus(networkCallStatus.success);
      }
    });
  };

  return (
    <UserDetailForm
      orderId={orderId}
      orderStatus={orderStatus}
      onClickPlaceOrder={sendOrderToFirebase}
    />
  );
}

export default DeliveryDetailsPage;
