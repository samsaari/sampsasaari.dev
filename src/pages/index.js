import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Template from "../templates/template";
import Hero from "../components/hero";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const IndexPage = () => {
  return (
    <>
      <Template>
        <Container>
          <Hero />
        </Container>
      </Template>
    </>
  );
};

export default IndexPage;
