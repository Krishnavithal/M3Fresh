import styled from "styled-components";

export const OrderContainer = styled.div`
  padding: 13px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d7e6d0;
  box-shadow: 0px 4px 0px #178e1c;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const OrderDetailsContainer = styled.div``;

export const OrderUser = styled.h3`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin: 0;
  padding-bottom: 9px;
`;

export const OrderDetailsText = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin: 0;
  padding-bottom: 5px;
  color: #000000;
`;

export const OrderMediumText = styled.span`
  font-family: Rubik;
  font-weight: 500;
`;

export const ViewOrderButton = styled.button`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  color: #d7e6d0;
  background: #178e1c;
  border-radius: 20px;
  padding: 8px 20px;
  border: none;
  :hover {
    background-color: #156e1b;
  }
`;

export const MarkAsDelivered = styled(ViewOrderButton)`
  margin-right: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;
