import React from "react";

import { StyledButton } from "./styledComponents";

function Button(props) {
  return (
    <StyledButton className={props.className} onClick={props.onClick}>
      {props.text}
    </StyledButton>
  );
}

export default Button;
