import styled from "styled-components";

export const StyledNavBarContainer = styled.div`
  background: #d7e6d0;
  padding: 0px 16px;
  height: 59px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #178e1c;
  text-align: left;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
  box-shadow: 1px 0px 5px #178e1c;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.span`
  background-color: orange;
  width: 11px;
  color: #fff;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11px;
  position: absolute;
  top: 2px;
  right: -5px;
  border-radius: 50%;
`;

export const CartIconContainer = styled.span`
  display: flex;
  align-items: center;
  position: relative;
`;

export const NavBackIcon = styled.span`
  padding-right: 10px;
  display: flex;
`;

export const BackIconWithText = styled.span`
  display: flex;
  align-items: center;
`;
