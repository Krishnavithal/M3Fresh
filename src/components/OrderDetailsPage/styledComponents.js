import styled from "styled-components";

export const OrdersContainer = styled.div`
  padding: 12px 20px;
  margin: 64px 0px;
`;

export const OrdersHeading = styled.h3`
  margin: 0;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #178e1c;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const NextContainer = styled.div`
  background: #d7e6d0;
  position: fixed;
  padding: 14px 16px;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px #178e1c;
`;

export const CartTotalHeading = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  color: #178e1c;
  margin: 0px;
  display: inline-block;
`;

export const CartTotal = styled.p`
  display: inline-block;
  font-weight: normal;
  color: #178e1c;
  margin: 0px;
`;

export const NextButton = styled.button`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: white;
  background-color: #178e1c;
  padding: 5px 15px;
  border-radius: 23px;
  border: none;
  :hover {
    background-color: #156e1b;
  }
`;
