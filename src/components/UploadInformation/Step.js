import styled from "styled-components";
import Text from "../Text";

const Step = ({ isOn, number, step }) => {
  return (
    <Container>
      <Circle isOn={isOn}>
        <Text $weight={700} size={30} color="#fff" lineHeight="140%">
          {number}
        </Text>
      </Circle>
      <Text $weight={500} size={18} color="black" lineHeight="140%">
        {step}
      </Text>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: ${(props) => (props.isOn ? "#212b36" : "#d9d9d9")};

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export default Step;
