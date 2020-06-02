import styled from "styled-components";

export const Container = styled.div`
  background: #d7e6d0;
  padding: 15px 10px;
  box-shadow: 0px -1px 0px #178e1c, 0px 1px 0px #178e1c;
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 94px;
  margin-right: 25px;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Details = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #178e1c;
  flex: 1;
`;

export const ItemName = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #178e1c;
  margin-top: 0px;
  margin-bottom: 5px;
  text-align: left;
`;

export const ItemPrice = styled.p`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #178e1c;
  margin: 0px 0px 10px 0px;
  text-align: left;
`;

export const QuantityButton = styled.button`
  background: #9fd7af;
  border-radius: 8px;
  border: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  padding: 5px 10px;
  color: #178e1c;
  :hover {
    background-color: #8ed6ad;
  }
`;

export const QtyCount = styled.span`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #178e1c;
  padding: 5px;
  margin: 0 5px;
  min-width: 25px;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
`;

export const Close = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  padding: 1px 5px;
  text-align: center;
  color: #d7e6d0;
  border: none;
  background-color: #178e1c;
  border-radius: 5px;
`;
