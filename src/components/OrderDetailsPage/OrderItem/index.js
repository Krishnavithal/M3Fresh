import React, { useState, useEffect } from "react";

import {
  Image,
  Container,
  ItemName,
  Price,
  QtyCount,
  AddToCart,
  DetailsContainer,
  Details,
  ItemPrice,
  QuantityContainer,
  QuantityButton,
  Close,
} from "./styledComponents";

function ItemCard(props) {
  return (
    <Container>
      <Close onClick={props.onDelete}>x</Close>
      <Image src={props.image} alt="item image" />
      <DetailsContainer>
        <Details>
          <ItemName>{props.itemName}</ItemName>
          <ItemPrice>
            ₹ {props.price} / {props.unit}
          </ItemPrice>
          <QuantityContainer>
            <QuantityButton
              disabled={props.quantity <= 0}
              onClick={props.decrement}
            >
              -
            </QuantityButton>
            <QtyCount>{props.quantity}</QtyCount>
            <QuantityButton onClick={props.increment}>+</QuantityButton>
          </QuantityContainer>
        </Details>
        <Price>₹ {props.price * props.quantity}</Price>
      </DetailsContainer>
    </Container>
  );
}

export default ItemCard;
