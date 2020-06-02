import React from "react";

import {
  Container,
  M3,
  TitleContainer,
  FightCorona,
  LabelText,
  LabelsContainer,
  Tagline,
} from "./styledComponents";

function Header(props) {
  return (
    <Container>
      <TitleContainer>
        <M3>M3</M3>
        Fresh.
      </TitleContainer>
      <Tagline>You stay Home, We work for You!</Tagline>
      <LabelsContainer>
        <LabelText>#Mahbubnagar</LabelText>
        <LabelText>#MCRHRD</LabelText>
        <LabelText>#MEPMA</LabelText>
      </LabelsContainer>
    </Container>
  );
}

export default Header;
