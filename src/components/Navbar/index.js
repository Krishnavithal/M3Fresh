import React from "react";
import { useHistory } from "react-router-dom";

import { goToHomePage, goToCartSummaryPage } from "../../utils/RouteUtils";

import {
  StyledNavBarContainer,
  CartIconContainer,
  Badge,
  NavBackIcon,
  BackIconWithText,
} from "./styledComponents";
import CartIcon from "./CartIcon";
import BackIcon from "../../icons/BackIcon";

function Navbar(props) {
  const history = useHistory();
  return (
    <StyledNavBarContainer>
      <BackIconWithText>
        {props.hideBack ? null : (
          <NavBackIcon onClick={() => history.goBack()}>
            <BackIcon />
          </NavBackIcon>
        )}
        <span>{props.heading}</span>
      </BackIconWithText>

      {props.showCart && props.count > 0 ? (
        <CartIconContainer onClick={() => goToCartSummaryPage(history)}>
          <Badge>{props.count}</Badge>
          <CartIcon />
        </CartIconContainer>
      ) : null}
    </StyledNavBarContainer>
  );
}

export default Navbar;
