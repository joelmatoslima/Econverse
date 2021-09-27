import styled from "styled-components";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Instruments from "./components/Instruments";
import News from "./components/News";
import Featured from "./components/Featured";
import Brands from "./components/Brands";
import AboutUs from "./components/AboutUs";
import Depositions from "./components/Depositions";
import Payment from "./components/Payment";
import Footer from "./components/Footer";





function App() {
  return (
    <Container >
      <Header/>
      <Slider/>
      <Instruments/>
      <News/>
      <Featured/>
      <Brands/>
      <AboutUs/>
      <Depositions/>
      <Payment/>
      <Footer/>
      
    </Container>
  );
}
export default App;

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`