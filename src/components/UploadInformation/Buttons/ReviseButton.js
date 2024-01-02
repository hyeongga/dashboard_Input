import styled from "styled-components";
import reviseIcon from "../../../assets/icon/revise.svg";
const ReviseButton = () => {
  return (
    <Container>
      <img src={reviseIcon} alt="reviseIcon" width={"22px"} height={"22px"} />
      revise
    </Container>
  );
};
const Container = styled.button`
  position: absolute;
  left: 820px;
  top: 20px;
  width: 112px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;

  border: none;
  border-radius: 8px;
  background: rgba(33, 43, 54, 0.6);

  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: white;
`;

export default ReviseButton;
