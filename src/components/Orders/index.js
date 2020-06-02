import React, { useState, useEffect } from "react";
import firebase from "firebase";

import { OrdersContainer, OrdersHeading } from "./styledComponents";
import { networkCallStatus } from "../../utils/CommonUtils";
import { getFormattedDate } from "../../utils/DateUtils";

import SingleOrder from "./SingleOrder";
import Navbar from "../Navbar";
import { renderLoader } from "../Products";

function Orders(props) {
  const [orders, setOrders] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(networkCallStatus.initial);

  useEffect(() => {
    setLoadingStatus(networkCallStatus.loading);
    firebase
      .database()
      .ref("orders")
      .on("value", (snapshot) => {
        setOrders(snapshot.val());
        setLoadingStatus(networkCallStatus.success);
      });
  }, []);

  const renderOrders = () => (
    <OrdersContainer>
      <OrdersHeading>Orders</OrdersHeading>
      {Object.values(orders)
        .reverse()
        .map((eachOrder) => (
          <SingleOrder
            key={eachOrder.orderId}
            status={eachOrder.status}
            username={eachOrder.userName}
            orderId={eachOrder.orderId}
            phoneNumber={eachOrder.phone_number}
            formatedDateTime={getFormattedDate(new Date(eachOrder.timeStamp))}
          />
        ))}
    </OrdersContainer>
  );
  return (
    <>
      <Navbar count={0} heading={"M3Fresh."} hideBack={true} />
      {loadingStatus === networkCallStatus.success
        ? renderOrders()
        : renderLoader()}
    </>
  );
}

export default Orders;
