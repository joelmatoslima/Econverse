import React from "react";
import styled from "styled-components";

import guitarra from "../image/instruments/guitarra.png";
import microfone from "../image/instruments/microfone.png";
import mesaDeSom from "../image/instruments/mesa-de-som.png";
import teclado from "../image/instruments/teclado.png";
import violao from "../image/instruments/violao.png";
import bateria from "../image/instruments/bateria.png";

function Instruments() {
  return (
    <Section>
      <div>
        <img src={guitarra} alt="guitarra" />
        <h2>Guitarras</h2>
      </div>

      <div>
        <img src={microfone} alt="microfone" />
        <h2>Microfone</h2>
      </div>
      <div>
        <img src={mesaDeSom} alt="Mesa de som" />
        <h2>Mesa de som</h2>
      </div>
      <div>
        <img src={teclado} alt="teclado" />
        <h2>Teclados</h2>
      </div>
      <div>
        <img src={violao} alt="violao" />
        <h2>Violão</h2>
      </div>
      <div>
        <img src={bateria} alt="bateria" />
        <h2>Baterias</h2>
      </div>
    </Section>
  );
}

export default Instruments;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 36px;
  div {
    text-align: center;
    cursor: pointer;

    h2 {
      margin-top: 20px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.09em;
    }
  }
`;
