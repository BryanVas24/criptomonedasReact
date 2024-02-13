import styled from "@emotion/styled";
import propTypes from "prop-types";

const Box = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: start;
  margin-top: 5%;
  gap: 5%;
`;

const Price = styled.p`
  color: rgb(181, 112, 25);
  font-size: 25px;
  span {
    font-weight: 700;
    color: green;
  }
`;

const Info = styled.p`
  color: rgb(181, 112, 25);
  font-size: 23px;
  span {
    font-weight: 700;
    color: rgb(151, 174, 86);
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Box>
      <img
        style={{ display: "block", width: "125px" }}
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Price>
          Precio : <span>{PRICE}</span>
        </Price>
        <Info>
          Precio más alto del dia : <span>{HIGHDAY}</span>
        </Info>
        <Info>
          Precio más bajo del dia : <span>{LOWDAY}</span>
        </Info>
        <Info>
          Variación en las ultimas 24 horas : <span>{CHANGEPCT24HOUR}</span>
        </Info>
        <Info>
          Ultima actualización : <span>{LASTUPDATE}</span>
        </Info>
      </div>
    </Box>
  );
};

Resultado.propTypes = {
  resultado: propTypes.object.isRequired,
};
export default Resultado;
