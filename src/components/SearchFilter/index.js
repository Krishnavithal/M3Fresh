import React, { useState, useEffect } from "react";

import { FilterContainer } from "./styledComponents";

function SearchFilter(props) {
  return <FilterContainer {...props}>{props.text}</FilterContainer>;
}

export default SearchFilter;
