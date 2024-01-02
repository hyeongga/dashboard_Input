import styled from "styled-components";

const ListBox = ({ title, content, flexDirection }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {flexDirection === "column" ? (
        <ContentColumn>{content}</ContentColumn>
      ) : (
        <ContentRow>{content}</ContentRow>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const Title = styled.div`
  width: 100%;
  background-color: #e1e9f0;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px 15px 0px 0px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
const ContentRow = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  border-radius: 0px 0px 15px 15px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  /* padding: 10px 10px 30px 30px; */
`;
export default ListBox;
