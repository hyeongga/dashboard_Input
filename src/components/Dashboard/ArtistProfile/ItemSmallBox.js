import styled from "styled-components";

import Text from "../../Text";

const ItemSmallBox = ({ title, content }) => {
  return (
    <Container>
      <Wrapper>
        <Text children={title} $weight={500} color="black" size={18} />
        <Text
          children={content}
          $weight={700}
          color="black"
          size={30}
          lineHeight="42px"
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 240px;
  height: 180px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 30px;
  gap: 20px;
`;

export default ItemSmallBox;
