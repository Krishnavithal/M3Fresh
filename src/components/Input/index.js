import React, { Component } from "react";

import { StyledInput } from "./styledComponents";

function Input(props) {
  return <StyledInput {...props} className={props.className}/>;
}

export default Input;
