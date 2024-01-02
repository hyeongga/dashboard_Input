import styled from "styled-components";

import Text from "../Text";

const LoginTextBox = () => {
  return (
    <Container>
      <Text children="Log in to Artist Board" size={24} $weight={700} />
      <Text
        children="계정 생성은 쿠키독 앱에서만 가능합니다"
        size={14}
        $weight={500}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export default LoginTextBox;
