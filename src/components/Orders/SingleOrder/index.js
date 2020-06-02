import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

import {
  OrderContainer,
  OrderDetailsContainer,
  ViewOrderButton,
  OrderUser,
  OrderDetailsText,
  OrderMediumText,
  MarkAsDelivered,
  ButtonsContainer,
} from "./styledComponents";
import { goToInvoiceDetailsPage } from "../../../utils/RouteUtils";
import { networkCallStatus } from "../../../utils/CommonUtils";

function SingleOrder(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(100);

  const markAsDelivered = () => {
    setLoading("LOADING");
    firebase
      .database()
      .ref("orders")
      .child(props.orderId)
      .update({
        status: "DELIVERED",
      })
      .then(() => {
        setLoading("SUCCESS");
      });
  };

  return (
    <OrderContainer>
      <OrderDetailsContainer>
        <OrderUser>{props.username}</OrderUser>
        <OrderDetailsText>OrderId: {props.orderId}</OrderDetailsText>
        <OrderDetailsText>
          Phone:
          <a href={`tel:+91 ${props.phoneNumber}`}>{props.phoneNumber}</a>
        </OrderDetailsText>
        <OrderDetailsText>
          Order placed at{" "}
          <OrderMediumText>{props.formatedDateTime}</OrderMediumText>
        </OrderDetailsText>
      </OrderDetailsContainer>
      <ButtonsContainer>
        {loading === networkCallStatus.loading ? (
          <BeatLoader size={10} margin={5} color={"#178e1c"} />
        ) : (
          <MarkAsDelivered
            onClick={() => {
              if (props.status !== "DELIVERED") markAsDelivered();
            }}
          >
            {props.status === "DELIVERED" ? "DELIVERED" : "Mark As Delivered"}
          </MarkAsDelivered>
        )}
        <ViewOrderButton
          onClick={() => goToInvoiceDetailsPage(history, props.orderId)}
        >
          View Order
        </ViewOrderButton>
      </ButtonsContainer>
    </OrderContainer>
  );
}

export default SingleOrder;
