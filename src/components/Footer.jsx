import React from "react";
import styled from "styled-components";
import econverse from "../image/footer/econverse.png";
import vtex from "../image/footer/vtex.png";

function Foote() {
  return (
    <Footer>
      <p>
        NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos
        reservados. Rua Santa Ifigênia, 556 560/562/564 - Santa Efigênia - CEP:
        01.207-000 - São Paulo / SP - CNPJ 07.282.516/0001-15
      </p>
      <div>
        <img src={econverse} alt="econverse" />
        <img src={vtex} alt="vtex" />
      </div>
    </Footer>
  );
}

export default Foote;

const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap: wrap;

  p {
    color: #010101;
    font-size: 10px;
    max-width: 503px;
    margin: 0 -100px;
  }
  div {
    display: flex;
    img {
      margin-right: 20px;
    }
  }
`;
