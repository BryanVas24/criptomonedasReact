//import { useState } from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import Criptoimg from "./assets/images/imagen-criptos.png";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
//styled components
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: rgb(60, 93, 151);
  text-align: center;
  margin-top: 100px;
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: "";
    width: 200px;
    height: 6px;
    background-color: rgb(105, 164, 251);
    display: block;
    margin: 10px auto auto;
  }
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
function App() {
  const [moneda, setMoneda] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (Object.keys(moneda).length > 0) {
      setCargando(true);
      const CotizarMoneda = async () => {
        const { coin, criptocoin } = moneda;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`;
        const Answer = await fetch(url);
        const data = await Answer.json();
        setResultado(data.DISPLAY[criptocoin][coin]);
        setCargando(false);
      };
      CotizarMoneda();

      return;
    }
  }, [moneda]);

  return (
    <Contenedor>
      <Imagen src={Criptoimg} />
      <div>
        <Heading>Cotiza la criptomoneda que desees</Heading>
        <Form setMoneda={setMoneda}></Form>
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>
    </Contenedor>
  );
}

export default App;
