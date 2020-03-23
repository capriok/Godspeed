import React from "react";
import styled from "styled-components";
import '../globalstyle'

const Div = styled.div`
  text-align:center;
  font-size: 1rem;
  padding: 5px 10px;
`

const MenuItem = ({ children }) => (
  <Div>
    {children}
  </Div>
)

export default MenuItem