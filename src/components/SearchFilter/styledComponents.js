import styled from "styled-components";

export const FilterContainer = styled.div`
  display: inline-block;
  padding: 5px 12px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  background: ${(props) => (props.isSelected ? "#DEF8D2" : "#ffffff")};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  color: #178e1e;
  margin: 0px 5px;
  cursor: pointer;
`;
