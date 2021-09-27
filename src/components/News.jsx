import React from "react";
import styled from "styled-components";
import news1 from "../image/news/news-1.png";
import news2 from "../image/news/news-2.png";

function News() {
  return (
    <Section>
      <div>
        <h2>Novidades</h2>
        <hr />
        <h3>
          <span>Áudio</span> <br /> Profissional{" "}
        </h3>
        <a href="/">Confira</a>
      </div>

      <div>
        <h2>Novidades</h2>
        <hr />
        <h3>
          <span>Instrumentos</span> <br /> Musicais{" "}
        </h3>
        <a href="/">Confira</a>
      </div>
    </Section>
  );
}

export default News;

const Section = styled.section`
  display: flex;
  margin-top: 35px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 386px;
    color: #fff;
    background-repeat: no-repeat;
    flex: 1;
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;
    h2 {
      font-size: 13px;
      font-weight: 300;
      letter-spacing: 0.4em;
    }
    h3 {
      font-size: 40px;
      font-weight: 300;
      letter-spacing: 0.12em;
    }
    span {
      font-weight: 700;
      letter-spacing: 0.09em;
      display: inline-block;
      margin-top: 18px;
    }
  }
  div:nth-child(1) {
    background-image: url(${news1});
  }
  div:nth-child(2) {
    background-image: url(${news2});
  }

  hr {
    border: 1px solid #ffffff;
    width: 18px;
    margin-top: 11px;
  }
  a {
    margin-top: 29px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    width: 154px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s;

    :hover{
      background-color: #fff;
      color: #000;
    }

  }
`;
