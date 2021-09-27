import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using ‘Content here, content here’, making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for ‘lorem ipsum’ will uncover many web sites still in their
        infancy. Lorem Ipsum as their default model text, and a search for
        ‘lorem ipsum’ will uncover many web sites still in their infancy. Lorem
        Ipsum as their default model text, and a search for ‘lorem ipsum’ will
        uncover many web sites still in their infancy.{" "}
      </p>
    </Container>
  );
}

export default AboutUs;

const Container = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #041e50;
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 131px;
  }
  p {
    color: #222222;
    max-width: 80%;
    font-size: 12px;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    margin-top: 33px;
  }
`;
