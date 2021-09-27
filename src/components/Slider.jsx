import React from "react";
import styled from "styled-components";
import sliderOne from "../image/sliders/slider-one.jpg";
import esquerda from "../image/sliders/esquerda.png";
import direita from "../image/sliders/direita.png";

function Slider() {
  return (
    <>
      <Section style={{ backgroundImage: `url(${sliderOne})` }}>
        <div>
          <h1>Novos Produtos</h1>
          <h2>
            <span>Instrumentos</span> <br /> Profissionais
          </h2>
          <a href="/">Confira</a>
          <hr />
        </div>

        <NavigationRight
          onClick={() =>
            alert(
              "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
            )
          }
        >
          <img src={direita} alt="direita" />
        </NavigationRight>
        <NavigationLeft
          onClick={() =>
            alert(
              "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
            )
          }
        >
          <img src={esquerda} alt="esquerda" />
        </NavigationLeft>
      </Section>
    </>
  );
}

export default Slider;

const Section = styled.section`
  height: 504px;
  margin-top: 16px;
  background-size: cover;
  background-position: center;
  background-color: #ccc;
  display: flex;
  align-items: center;
  position: relative;

  > div {
    margin-left: 166px;
    color: white;
    text-align: center;

    display: flex;
    flex-direction: column;

    h1 {
      letter-spacing: 0.4em;
      font-size: 16px;
      font-weight: 300;
      text-transform: uppercase;
    }
    h2 {
      font-size: 47px;
      letter-spacing: 0.12em;
      font-weight: 300;
      line-height: 100%;
      text-transform: uppercase;
      margin-top: 20px;

      span {
        font-weight: 700;
        letter-spacing: 0.09em;
      }
    }
    a {
      color: white;
      text-transform: uppercase;
      display: inline-block;
      margin-top: 46px;
    }
    hr {
      width: 77px;
      align-self: center;
      margin-top: 29px;
    }
  }
`;
const NavigationLeft = styled.div`
  margin: 0 !important;
  position: absolute;
  left: 39px;
  cursor: pointer;
`;
const NavigationRight = styled.div`
  position: absolute;
  right: 39px;
  cursor: pointer;
`;
