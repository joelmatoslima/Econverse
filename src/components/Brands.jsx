import React from "react";
import styled from "styled-components";
import akg from "../image/Brands/akg.png";
import roland from "../image/Brands/roland.png";
import boss from "../image/Brands/boss.png";
import shure from "../image/Brands/shure.png";
import setaEsquerda from "../image/Brands/seta-esquerda.png";
import setaDireita from "../image/Brands/seta-direita.png";

function Brands() {
  return (
    <Section>
      <h1>
        As <span>Melhores</span> Marcas
      </h1>
      <h2>
        it is a long established fact that a reader will be destracted by the
        readable
      </h2>

      <div>
        <img src={akg} alt="akg" />
        <img src={roland} alt="roland" />
        <img src={boss} alt="boss" />
        <img src={shure} alt="shure" />

        <LeftArrow
          onClick={() =>
            alert(
              "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
            )
          }
        >
          <img src={setaEsquerda} alt="setaEsquerda" />
        </LeftArrow>

        <RightArrow
          onClick={() =>
            alert(
              "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
            )
          }
        >
          <img src={setaDireita} alt="setaDireita" />
        </RightArrow>
      </div>
    </Section>
  );
}

export default Brands;

const Section = styled.section`
  text-align: center;

  h1 {
    color: #041e50;
    letter-spacing: 0.1em;
    font-size: 25px;
    font-weight: 400;
    margin-top: 100px;
  }
  span {
    font-weight: 700;
  }
  h2 {
    color: #a5a5a5;
    letter-spacing: 0.1em;
    font-size: 15px;
    font-weight: 400;
    margin-top: 19px;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-top: 103px;
    position: relative;
  }


  img{
    cursor: pointer;
  }
`;

const LeftArrow = styled.div`
  position: absolute !important;
  left: 0;
  bottom: 20% !important;
  cursor: pointer;
`;
const RightArrow = styled.div`
  position: absolute !important;
  right: 0;
  bottom: 20% !important;
  cursor: pointer;
`;
