import React from "react";
import styled from "styled-components";
import visa from "../image/payment/visa.png";
import master from "../image/payment/master.png";
import american from "../image/payment/american.png";
import diners from "../image/payment/diners.png";
import boleto from "../image/payment/boleto.png";
import ssl from "../image/payment/ssl.png";
import vtex from "../image/payment/vtex.png";

function Payment() {
  return (
    <Section>
      <div>
        <h2>Institucional</h2>
        <ul>
          <li>
            <a href="/">Quem Somos</a>
          </li>
          <li>
            <a href="/">Nossas Lojas</a>
          </li>
        </ul>

        <h2>Atendimento</h2>
        <li>
          <a href="/">Fale Conosco</a>
        </li>
        <li>
          <a href="/">vendas@ninjasom.com</a>
        </li>
      </div>

      <div>
        <h2>Ajuda e suporte</h2>
        <ul>
          <li>
            <a href="/">Política de privacidade</a>
          </li>
          <li>
            <a href="/">Política de trocas</a>
          </li>
          <li>
            <a href="/">Prazos de entrega</a>
          </li>
          <li>
            <a href="/">Termo de uso</a>
          </li>
        </ul>
      </div>

      <div>
        <h2>Formas de pagamentos</h2>
        <div>
          <img src={visa} alt="master" />
          <img src={master} alt="visa" />
          <img src={american} alt="american" />
        </div>

        <div>
          <img src={diners} alt="diners" />
          <img src={boleto} alt="boleto" />
        </div>

        <h2>Segurança</h2>
        <img src={ssl} alt="ssl" />
        <img src={vtex} alt="vtex" />
      </div>

      <form action="/">
        <h1>
          ASSINE NOSSO <span>NEWSLETTER</span> E RECEBA NOVIDADES E PROMOCÕES
        </h1>
        <input type="text" name="email" placeholder="SEU NOME" />
        <input type="email" name="email" placeholder="SEU E-MAIL" />
        <button type="submit">Enviar</button>
      </form>
    </Section>
  );
}

export default Payment;

const Section = styled.section`
  background: #041e50;
  display: flex;
  justify-content: space-around;
  padding-top: 108px;

  padding-bottom: 91px;
  flex-wrap: wrap;

  h2 {
    font-size: 14px;
    color: #ffffff;
    text-transform: uppercase;
    margin: 20px 0;
  }
  a {
    color: #ffffff;
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 5px;
  }

  img {
    margin: 5px;
  }

  form {
    width: 276px;
    background: #ffffff;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 34px 30px;
    h1 {
      color: #041e50;
      font-size: 14px;
      font-weight: normal;
      margin-bottom: 28px;
    }
    span {
      font-weight: 700;
    }
    input {
      border: none;
      border-bottom: 0.6px solid #041e50;
      width: 100%;
      margin-bottom: 19px;
      padding: 11px;
      outline: none;

      ::placeholder {
        font-size: 12px;
        color: #041e50;
      }
    }
    button {
      border: 1px solid #041e50;
      border-radius: 5px;
      background-color: transparent;
      padding: 10px 32px;
      cursor: pointer;
    }
  }
`;
