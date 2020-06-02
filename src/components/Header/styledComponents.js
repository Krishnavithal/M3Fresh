import styled from "styled-components";

export const Container = styled.div`
  background: #d7e6d0;
  padding: 10px 16px;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 99;
  box-shadow: 1px 0px 5px #178e1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const M3 = styled.div`
  background-color: #178e1c;
  color: white;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 2px;
`;

export const TitleContainer = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 37px;
  color: #178e1c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FightCorona = styled.span`
  background-color: #178e1c;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 3px 6px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const LabelText = styled.span`
  width: 80px;
  color: white;
  background-color: #178e1c;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0px;
  border-top-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const LabelsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const Tagline = styled.p`
  margin: 0;
  margin-top: 5px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #7c6767;
`;
