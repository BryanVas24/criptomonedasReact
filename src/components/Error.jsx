import styled from "@emotion/styled";
import propType from "prop-types";

const ErrorMessage = styled.div`
  color: red;
  border-radius: 10px;
  margin: 5% 0%;
  border: 3px solid red;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 25px;
`;

const Error = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>;
};

Error.propTypes = {
  children: propType.node.isRequired,
};
export default Error;
