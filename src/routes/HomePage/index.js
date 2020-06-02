import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import { goToProductsPage } from "../../utils/RouteUtils";

import {
  Container,
  BodyContainer,
  StayHome,
  OrderOnline,
  InfoText,
  OrderNowButton,
} from "./styledComponents";

const HomePage = () => {
  const history = useHistory();
  const handleOrderNow = () => {
    goToProductsPage(history);
  };
  return (
    <Container>
      <Header />
      <BodyContainer>
        <StayHome>Stay Home, Stay Safe!</StayHome>
        <OrderOnline>Order Online</OrderOnline>
        <InfoText>* online booking platform for containment zones</InfoText>
        <OrderNowButton onClick={handleOrderNow} text={"Order Now"} />
      </BodyContainer>
    </Container>
  );
};

export default HomePage;
