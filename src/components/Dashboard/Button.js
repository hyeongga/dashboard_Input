import styled from "styled-components";
import Text from "../Text";

const Button = ({ bgColor, fontColor, children }) => {
  return (
    <Container bgColor={bgColor}>
      <Text
        children={children}
        $weight={500}
        color={fontColor}
        size={18}
        lineHeight="14px"
      />
    </Container>
  );
};
const Container = styled.button`
  display: flex;
  padding: 16px 18px;
  justify-content: center;
  align-items: center;
  background: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 10px;
`;

export default Button;
