import styled from "styled-components";
import cadeado from "../image/header/cadeado.svg";
import setas from "../image/header/setas.svg";
import porcentagem from "../image/header/porcentagem.svg";
import caminhao from "../image/header/caminhao.svg";
import line from "../image/header/line.svg";
import logo from "../image/header/logo.png";
import lupa from "../image/header/lupa.png";
import whatsapp from "../image/header/whatsapp.png";
import usuario from "../image/header/usuario.png";
import seta from "../image/header/seta.png";
import sacola from "../image/header/sacola.png";

const Header = () => {
  return (
    <header>
      <HeaderTop>
        <span>
          <img src={cadeado} alt="Cadeado" /> Compra 100% Segura
        </span>
        <img src={line} alt="" style={{ height: 19 }} />
        <span>
          <img src={setas} alt="setas" /> 1 TROCA GRÁTIS
        </span>
        <img src={line} alt="" style={{ height: 19 }} />

        <span>
          <img src={porcentagem} alt="porcentagem" />
          5X SEM JUROS
        </span>

        <img src={line} alt="" style={{ height: 19 }} />

        <span>
          <img src={caminhao} alt="caminhao" />
          ENTREGAS EM TODO O BRASIL
        </span>

        {/* <ShoppingArea>
          <img src={sacola} alt="sacola" />
          Seu Carrinho
          <span>0 Item (s)</span>
        </ShoppingArea> */}
      </HeaderTop>
      <Box>
        <div>
          <HeaderMiddle>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>

            <InputArea>
              <input type="text" placeholder="BUSQUE AQUI..." />
              <button>
                <img src={lupa} alt="lupa" />
              </button>
            </InputArea>

            <ContactArea>
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
                (11) 99999-9999
              </a>
            </ContactArea>

            <AcounttArea>
              <img src={usuario} alt="usuario" />

              <a href="/">
                <span>Olá, Visitante</span> <br />
                minha conta
              </a>
            </AcounttArea>
          </HeaderMiddle>

          <HeaderBottom>
            <nav>
              <ul>
                <li>
                  <a href="/">Todas as Categorias</a>
                </li>
                <li>
                  <a href="/">Som Profissional</a>
                  <img src={seta} alt="seta" />
                </li>
                <li>
                  <a href="/">Instrumentos Musicais</a>
                  <img src={seta} alt="seta" />
                </li>

                <li>
                  <a href="/">Promoções</a>
                </li>
                <li>
                  <a href="/">Contato</a>
                </li>
              </ul>
            </nav>
          </HeaderBottom>
        </div>

        <ShoppingArea>
          <img src={sacola} alt="sacola" />
          Seu Carrinho
          <span>0 Item (s)</span>
        </ShoppingArea>
      </Box>
      <Hr />
    </header>
  );
};

export default Header;

const HeaderTop = styled.div`
  height: 37px;
  background-color: #041e50;
  color: #fff;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 141px;
  span {
    display: flex;
    align-items: center;
    img {
      margin-right: 21px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;

  img {
    margin-right: 40px;
  }

  input {
    width: 339px;
    height: 41px;
    border: 1px solid #707070;
    border-radius: 4px;
    padding: 16px 27px;
    padding-right: 60px;
  }
`;

const InputArea = styled.div`
  display: flex;
  button {
    cursor: pointer;
    position: relative;
    right: 40px;
    border: none;
    background-color: transparent;
  }
`;

const ContactArea = styled.div`
  display: flex;
  font-size: 10px;
  margin-right: 38px;
  img {
    margin-right: 9px;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #041e50;
  }
`;

const AcounttArea = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 7px;
  line-height: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  margin-right: 48px;

  span {
    display: inline-block;
    font-size: 10px;
    margin-bottom: 5px;
  }
  a {
    margin-left: 8px;
    text-decoration: none;
    color: #041e50;
  }
`;

const ShoppingArea = styled.div`
  right: 140px;
  top: 50px;
  width: 77px;
  height: 102px;
  background: #041e50;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: 0.09em;
  z-index: 2;

  img {
    margin-bottom: 11px;
  }

  span {
    font-size: 10px;
    margin-top: 7px;
  }
`;

const HeaderBottom = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    margin-right: 60px;
  }
  li {
    display: flex;
    align-items: center;
    margin-top: 15px;
    img {
      margin-left: 5px;
    }
  }
  a {
    text-transform: uppercase;
    color: #041e50;
    font-weight: 700;
    font-size: 10px;
  }
`;

const Hr = styled.hr`
  border: 1px solid rgba(120, 117, 117, 0.22);
  position: relative;
  top: -35px;
`;
