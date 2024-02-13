import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import propTypes from "prop-types";
import Error from "./Error";

import useSelectCoins from "../hooks/useSelectCoins";
//input con style components
const Input = styled.input`
  background-color: rgb(70, 71, 185);
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;
const Form = ({ setMoneda }) => {
  const coins = [
    { id: "USD", name: "Dolar Estado Unidense" },
    { id: "MXN", name: "Peso Mexicano" },
    { id: "EUR", name: "Euro" },
    { id: "GBP", name: "Libra Esterlina" },
    { id: "JPY", name: "Yen Japones" },
  ];
  //state normal xD
  const [cripto, setCripto] = useState([]);
  const [error, setError] = useState(false);

  //hook personalizado
  const [coin, SelectCoins] = useSelectCoins("Elige tu moneda", coins);
  const [criptocoin, SelectCriptoCoins] = useSelectCoins(
    "Elige tu criptomoneda",
    cripto
  );

  

  //useefect que recibe api
  useEffect(() => {
    const APIRequest = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const APIAnswer = await fetch(url);
      const data = await APIAnswer.json();
      //llenando un array con los datos obtenidos
      const ArrayCriptos = data.Data.map((cripto) => {
        const criptoObject = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        return criptoObject;
      });
      //seteando al usestate de criptomonedas
      setCripto(ArrayCriptos);
    };
    //llamando la función
    APIRequest();
  }, []);

  const ValidaForm = (e) => {
    e.preventDefault();
    if ([coin, criptocoin].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    setMoneda({ coin, criptocoin });
  };
  return (
    <>
      {error && (
        <Error>
          <p>Selecciona tu moneda y la criptomoneda que deseas Cotizar</p>
        </Error>
      )}
      <form onSubmit={ValidaForm}>
        <SelectCoins />
        <SelectCriptoCoins />
        <Input type="submit" value="Cotizar" />
      </form>
    </>
  );
};

Form.propTypes = {
  setMoneda: propTypes.func.isRequired,
};

export default Form;
