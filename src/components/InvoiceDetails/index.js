import React from "react";
import {
  InvoiceDetailsContainer,
  InvoiceContainer,
  BillDetailsText,
  DetailsContainer,
  Item,
  ItemName,
  ItemPrice,
  Separator,
  TotalItemContainer,
  UserDetails,
  OderId,
  ShippingDetails,
  PrintInvoiceButton,
  DateAndTime,
} from "./styledComponents";
import Header from "../Header";

function InvoiceDetails(props) {
  const renderEachItemDetails = () => {
    return props.orderDetails.items.map((item, index) => (
      <Item isFirst={index === 0} key={`${item}+${index}`}>
        <ItemName>{`${item.name}  x  ${item.quantity} (${item.units})`}</ItemName>
        <ItemPrice>{item.price * item.quantity}</ItemPrice>
      </Item>
    ));
  };
  return (
    <InvoiceDetailsContainer>
      <Header />
      <InvoiceContainer>
        <OderId>{`ORDER#${props.orderDetails.orderId}`}</OderId>
        <DateAndTime>{`Order was placed on ${props.orderDetails.date}`}</DateAndTime>
        <ShippingDetails>
          <BillDetailsText>{`Shipping Details`}</BillDetailsText>
          <UserDetails>
            <ItemName>{props.orderDetails.userName},</ItemName>
            <ItemName>{props.orderDetails.phoneNumber},</ItemName>
            <ItemName>{props.orderDetails.address}.</ItemName>
          </UserDetails>
        </ShippingDetails>
        <BillDetailsText>Bill Details</BillDetailsText>
        <DetailsContainer>
          {renderEachItemDetails()}
          <Separator />
          <TotalItemContainer>
            <ItemName>Total</ItemName>
            <ItemPrice>₹ {props.orderDetails.totalPrice}</ItemPrice>
          </TotalItemContainer>
        </DetailsContainer>
        <PrintInvoiceButton
          text={`Print Invoice`}
          onClick={() => {
            window.print();
          }}
        />
      </InvoiceContainer>
    </InvoiceDetailsContainer>
  );
}

export default InvoiceDetails;
