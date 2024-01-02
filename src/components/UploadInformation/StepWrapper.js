import styled from "styled-components";
import Step from "./Step";
const StepWrapper = () => {
  const step = ["Artist", "Album", "Track", "Connect"];
  return (
    <Container>
      {step.map((v, i) => {
        return <Step isOn={false} number={i + 1} step={v} />;
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  margin-top: 25px;

  display: flex;
  justify-content: center;
  align-items: start;
  gap: 150px;
`;
export default StepWrapper;
