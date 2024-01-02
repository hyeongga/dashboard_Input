import styled from "styled-components";

const OkButton = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };
  return <Container onClick={closeModal}>OK</Container>;
};
const Container = styled.button`
  width: 113px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #212b36;

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

export default OkButton;
