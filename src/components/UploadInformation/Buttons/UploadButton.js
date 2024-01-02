import styled from "styled-components";

const UploadButton = () => {
  return <Container>Upload!</Container>;
};
const Container = styled.button`
  width: 150px;
  height: 56px;
  border-radius: 8px;
  background: #00c4b9;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  top: 20px;
  left: 800px;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
`;

export default UploadButton;
