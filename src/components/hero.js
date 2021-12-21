import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";

const Content = styled.div`
  padding: 1rem 2rem 10rem 2rem;
`;

const Heading1 = styled.h1`
  padding-bottom: 0.25rem;
  color: rgb(255 255 255 / 80%);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.25rem;

  @media screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Heading2 = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    font-size: 1.45rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const Heading3 = styled.h3`
  color: #fff;
  font-size: 8.5rem;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Heading4 = styled.h4`
  font-size: 3rem;
  font-weight: 400;
  color: #fff;
  text-align: right;

  @media screen and (max-width: 1200px) {
    font-size: 2.25rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 467px) {
    font-size: 1.35rem;
    text-align: left;
    padding-left: 3rem;
  }
`;

const greetings = [
  "Hi, I'm",
  "Hei, olen",
  "Hallo, ich bin",
  "Salut, je suis",
  "Hej, jag heter",
  "Yassou, me lene",
  "Hi, I'm",
];

const Hero = () => (
  <Content>
    <Fade left>
      <Heading1>
        <Typist>
          <Typist.Delay ms={1500} />
          {greetings.map((greeting, i) => (
            <span key={i}>
              <span>{greeting}</span>
              {i < greetings.length - 1 ? (
                <Typist.Backspace count={greeting.length} delay={4000} />
              ) : (
                <Typist.Delay ms={500} />
              )}
            </span>
          ))}
        </Typist>
      </Heading1>
    </Fade>
    <Fade left>
      <Heading2>Sampsa Saari</Heading2>
    </Fade>
    <Fade bottom>
      <Heading3>Web Developer</Heading3>
    </Fade>
    <Fade bottom big>
      <Heading4>based in Oulu, Finland.</Heading4>
    </Fade>
  </Content>
);

export default Hero;
