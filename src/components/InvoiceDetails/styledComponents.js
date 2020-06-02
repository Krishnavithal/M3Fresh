import styled from "styled-components";
import Button from "../Button";

export const InvoiceDetailsContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const InvoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 110px 14px 0px 14px;
`;

export const BillDetailsText = styled.h4`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
  color: grey;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
export const OderId = styled.h3`
  color: lightBlue;
`;
export const UserDetails = styled(DetailsContainer)`
  margin-left: 10px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${(props) => (props.isFirst ? "0px" : "8px")};
`;
export const TotalItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: "8px";
`;

export const ItemName = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  color: brown;
  font-size: 13px;
`;

export const ItemPrice = styled(ItemName)``;

export const Separator = styled.hr`
  color: black;
  width: 100%;
  border-top-style: dashed;
`;

export const ShippingDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const PrintInvoiceButton = styled(Button)`
  align-self: center;
  margin-top: 51px;
  cursor: pointer;
  font-family: Rubik;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 19px;
  @media print {
    display: none;
  }
`;

export const DateAndTime = styled(ItemName)`
  margin-left: 8px;
`;
