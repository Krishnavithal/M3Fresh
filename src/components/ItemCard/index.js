import React, { useState, useEffect } from "react";

import {
  Image,
  Container,
  ItemName,
  Price,
  Quantity,
  AddToCart,
  QuantityButton,
  QtyCount,
  ItemDetailsContainer,
  PriceAndQuantityContainer,
} from "./styledComponents";

function ItemCard(props) {
  return (
    <Container>
      <Image src={props.image} alt="item image" />
      <ItemDetailsContainer>
        <ItemName>{props.name}</ItemName>
        <PriceAndQuantityContainer>
          <Price>
            ₹{props.price}/{props.units}
          </Price>
          {props.quantity > 0 ? (
            <Quantity>
              <QuantityButton
                disabled={props.quantity <= 0}
                onClick={props.decrement}
              >
                -
              </QuantityButton>
              <QtyCount>{props.quantity}</QtyCount>
              <QuantityButton onClick={props.increment}>+</QuantityButton>
            </Quantity>
          ) : (
            <AddToCart onClick={props.onAdd}>Add</AddToCart>
          )}
        </PriceAndQuantityContainer>
      </ItemDetailsContainer>
    </Container>
  );
}

export default ItemCard;
