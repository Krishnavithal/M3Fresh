import styled from "styled-components";
import Input from "../Input";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: #e7ffec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AddressInput = styled.textarea`
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  height: 80px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  border: none;
  font-size: 15px;
  font-weight: bold;
  font-family: "Roboto";
  box-shadow: 0px 0px 2px 1px #178e1c;
  color: #178e1c;
  -webkit-appearance: none;
  vertical-align: top;
`;

export const RemarksInput = styled(AddressInput)``;

export const OrderStatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 268px;
  padding: 10px 5px;
  background: #d7e5d0;
  border-radius: 20px 0px;
  box-sizing: border-box;
`;

export const OrderStatusHeading = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  color: #1f5721;
`;

export const ContactInformation = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #178e1c;
  margin: 10px 0;
  text-align: center;
`;

export const ViewInvoiceText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #1f5721;
`;

export const PlaceOtherOrderButton = styled.button`
  margin-top: 30px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: white;
  background-color: #178e1c;
  padding: 10px 15px;
  border-radius: 23px;
  border: none;
  :hover {
    background-color: #156e1b;
  }
`;
