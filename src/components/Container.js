import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
`;

const Container = props => (
  <ContainerWrapper>{props.children}</ContainerWrapper>
);

export default Container;
