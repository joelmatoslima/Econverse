import React from "react";
import styled from "styled-components";

function Modal({ showModal, itemModal, setShowModal }) {
  function hiddeModal(e) {
    if (e.target.id === "container") {
      setShowModal(false);
    }
  }

  return (
    <div>
      {showModal && (
        <Container id="container" onClick={hiddeModal}>
          <Box>
            <BtnClose onClick={() => setShowModal(false)}>X</BtnClose>

            <img src={itemModal.photo} alt="itemModal.productName" />
            <div>
              <h1>{itemModal.productName}</h1>
              <h2>R$ {itemModal.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</h2>
              <p>{itemModal.descriptionShort}</p>
              <a href="/">Veja mais detalhes do produto  </a>
              <button>Adcionar ao carrinho</button>
            </div>
          </Box>
        </Container>
      )}
    </div>
  );
}

const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 769px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 329px;
    margin-right: 32px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 67px;
    margin-bottom: 75px;

    h1 {
      margin: 0;
      color: #041e50;
      font-size: 20px;
      letter-spacing: 0.05em;
      text-transform: none;
    }
    h2 {
      font-size: 20px;
      color: #041e50;
      font-weight: 900;
      letter-spacing: 0.05em;
      margin-top: 25px;
    }
    p {
      color: #222222;
      letter-spacing: 0.05em;
      font-size: 10px;
      line-height: 150.5%;
      margin-top: 21px;
      max-width: 290px;
    }
    a {
      color: #041e50;
      font-size: 12px;
      letter-spacing: 0.05em;
      text-decoration: underline;
      margin-top: 30px;
    }
    button {
      background-color: #041e50;
      border-radius: 5px;
      width: 164px;
      height: 40px;
      color: white;
      letter-spacing: 0.05em;
      font-size: 11px;
      font-weight: 700;
      margin-top: 37px;
      cursor: pointer;
    }
  }
`;

const BtnClose = styled.button`
  background-color: transparent !important;
  border: none;
  color: rgba(0, 0, 0, 0.7) !important;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 20px;
`;

export default Modal;
