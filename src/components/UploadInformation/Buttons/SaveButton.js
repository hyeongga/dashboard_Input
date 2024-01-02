import styled from "styled-components";

const SaveButton = () => {
  return <Container>save</Container>;
};
const Container = styled.button`
  position: absolute;
  left: 857px;
  top: 20px;
  width: 106px;
  height: 50px;
  border-radius: 6px;
  background: black;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: white;
`;

export default SaveButton;
