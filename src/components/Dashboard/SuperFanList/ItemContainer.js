import styled from "styled-components";
const ItemContainer = ({
  title,
  UserName,
  WalletAddress,
  Connect,
  FirstMeet,
}) => {
  return (
    <Container>
      {/* {title.map((v) => (
        <TextContainer size={v.width}>{v.value}</TextContainer>
      ))} */}
      <TextContainer width={140}>{UserName}</TextContainer>
      <TextContainer width={400}>{WalletAddress}</TextContainer>
      <TextContainer width={140}>{Connect}</TextContainer>
      <TextContainer width={140}>{FirstMeet}</TextContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const TextContainer = styled.div`
  width: ${({ width }) => `${width}px`};
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  font-family: "DM Sans";
`;
export default ItemContainer;
