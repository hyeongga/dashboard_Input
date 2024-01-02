import styled from "styled-components";

const FindButton = () => {
  return <Container>find</Container>;
};
const Container = styled.button`
  width: 67px;
  height: 40px;
  border-radius: 6px;
  background: black;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: DM Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: white;
`;

export default FindButton;
