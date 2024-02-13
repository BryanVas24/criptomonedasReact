import styled from "@emotion/styled";
import { useState } from "react";

//label usando style components
const Label = styled.label`
  font-size: 24px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  margin: 15px 0;
  color: green;
  display: block;
`;
//select usando style components
const Select = styled.select`
  border-radius: 10px;
  width: 100%;
  padding: 8px;
  text-align: center;
  margin-bottom: 5%;
  background-color: rgb(198, 219, 255);
  color: rgb(70, 71, 185);
  font-weight: 700;
  font-family: "Lato", sans-serif;
`;

const useSelectCoins = (labelText, coins) => {
  const [state, setState] = useState("");
  //retornando contenido
  const SelectCoins = () => (
    <>
      <Label>{labelText}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">--SELECCIONA TU MONEDA--</option>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCoins];
};

export default useSelectCoins;
