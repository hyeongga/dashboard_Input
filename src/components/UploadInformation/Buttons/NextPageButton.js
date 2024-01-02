import styled from "styled-components";
import arrowLeft from "../../../assets/icon/arrowLeft.svg";
const NextPageButton = () => {
  return (
    <Container>
      <img src={arrowLeft} alt="arrowLeft" width={"78px"} height={"78px"} />
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  left: 900px;
  top: 230px;
  width: 78px;
  height: 78px;
  border-radius: 6px;
  z-index: 10;

  border: none;
`;
export default NextPageButton;
