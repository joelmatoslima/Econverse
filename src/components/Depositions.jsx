import React from "react";
import styled from "styled-components";
import perfil from "../image/perfil.png";
import setaEsqueda from "../image/seta-esquerda.png";
import setaDireita from "../image/seta-direita.png";
import peca from "../image/peca.png";

function Depositions() {
  return (
    <Section>
      <Arrow
        onClick={() =>
          alert(
            "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
          )
        }
      >
        <img src={setaEsqueda} alt="setaEsqueda" />
      </Arrow>

      <Perfil>
        <img src={perfil} alt="perfil" />
        <div>
          <h2>Felipe Salmin</h2>
          <span>Designer</span>
        </div>
      </Perfil>
      <Depoiments>
        <img src={peca} alt="peca" />
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for ‘lorem ipsum’
        </p>
      </Depoiments>
      <Arrow
        onClick={() =>
          alert(
            "Funcionalidade ainda não Implementada, não requisitado pelo avaliador"
          )
        }
      >
        <img src={setaDireita} alt="setaDireita" />
      </Arrow>
    </Section>
  );
}

export default Depositions;

const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 175px;

  margin: auto;
  margin-top: 108px;
  background: #f7f7f7;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  position: relative;
  top: 40px;
`;
const Perfil = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 11px;
  }
  h2 {
    font-size: 12px;
    color: #041e50;
  }
  span {
    color: #041e50;
    font-size: 10px;
    font-weight: 400;
  }
`;

const Depoiments = styled.div`
  max-width: 542px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  position: relative;
  right: 75px;
  p {
    color: #2f2f2f;
    font-size: 13px;
    padding-top: 23px;
    padding-left: 43px;
    padding-right: 43px;
    padding-bottom: 6px;
  }
  img {
    position: absolute;
    left: -9px;
    top: 30%;
  }
`;

const Arrow = styled.div`
  cursor: pointer;
`;
