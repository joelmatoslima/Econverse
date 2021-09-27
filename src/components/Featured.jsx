import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";
import lupa from "../image/lupa.png";

function Featured(props) {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [itemModal, setItemModal] = useState();
  const [showMore, setShowMore] = useState(9);

  useEffect(() => {
    async function getItemns() {
      const obj = await fetch("/produtos.json");
      const objJson = await obj.json();
      setItems(objJson.products);
      // console.log(objJson.products);
    }
    getItemns();
  }, []);

  function handleModal(item) {
    // console.log("champi");
    // console.log(item);
    setItemModal(item);
    setShowModal(true);
  }

  return (
    <Section>
      <h1>
        Instrumentos <span>Destaques</span>{" "}
      </h1>
      <h2>
        it is a long established fact that a reader will be destracted by the
        readable
      </h2>

      <Items>
        {items.map((item, key) => {
          return (
            <Item
              showMore={showMore}
              key={key}
              onClick={() => handleModal(item)}
            >



              <img src={item.photo} alt={item.productName} />



              <div className="set--bottom">
                <h2>{item.productName}</h2>
                <h3>{item.descriptionShort}</h3>
                <span>R$ {item.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>

              </div>

              <QuickView>
                <div>
                  <img src={lupa} alt="lupa" />
                </div>
                <span>Quick view</span>
              </QuickView>
            </Item>
          );
        })}
      </Items>
      {showMore === 9 && (
        <button onClick={() => setShowMore(999)}>Ver Mais</button>
      )}

      {showMore === 999 && (
        <button onClick={() => setShowMore(9)}>Mostrar Menos</button>
      )}

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        itemModal={itemModal}
      />
    </Section>
  );
}

export default Featured;

const Section = styled.section`
  text-align: center;
  > button {
    border: 1px solid #041e50;
    border-radius: 5px;
    width: 154px;
    height: 52px;
    cursor: pointer;
    background-color: transparent;
    text-transform: uppercase;
    color: #041e50;
    letter-spacing: 0.1em;
    margin-top: 20px;
    transition: 0.2s;


    :hover{
      background-color: #041e50;
      color: #fff;
    }



  }
  h1 {
    text-align: center;
    color: #041e50;
    font-weight: normal;
    font-size: 23px;
    text-transform: uppercase;
    margin-top: 90px;
    letter-spacing: 0.1em;
    span {
      font-weight: 700;
    }
  }
  h2 {
    margin-top: 21px;
    text-align: center;
    color: #222222;
    letter-spacing: 0.1em;
    font-size: 15px;
    font-weight: 400;
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 85px;


`;

const QuickView = styled.div`
  position: absolute;
  top: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;

  div {
    width: 24px;
    height: 24px;
    background-color: #041e50;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  img {
    width: 24px;
    height: 24px;
    
  }
  span {
    color: #041e50;
    font-weight: bolder;
    font-size: 12px !important;
  }
`;


;

const Item = styled.div`
  width: 249px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 44px;
  margin-bottom: 61px;
  cursor: pointer;
  position: relative;
  transition: 0.6s ;
  padding: 30px 15px;


  img {
    width: 218px;

  }

  h2 {
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 15px;
    margin-top: 10px;
    color: #041e50;
  }
  h3 {
    font-size: 10px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #041e50;
    font-weight: 300;
    margin-top: 12px;
    margin-bottom: 7px;
  }
  span {
    color: #041e50;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0.05em;
    padding-bottom: 10px;
  }

  :nth-child(n + ${({ showMore }) => showMore}) {
    display: none;
  }
  :hover {
    -webkit-box-shadow: 5px 6px 21px -3px rgba(0, 0, 0, 0.19);
    box-shadow: 5px 6px 21px -3px rgba(0, 0, 0, 0.19);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

    transition: 0.6s !important;

    ${QuickView} {
      display: flex;
    }


  }





  


  
  :hover > img:nth-child(1){

    
      transition: 0.6s ;

      margin-top: -15px
  }

  :hover .set--bottom{
    transition: 0.6s ;

    margin-top: 15px

  }



 
`;
