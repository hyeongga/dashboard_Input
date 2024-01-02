import styled from "styled-components";
import ItemSmallBox from "../../components/Dashboard/ArtistProfile/ItemSmallBox";
import BoardTitle from "../../components/Dashboard/BoardTitle";
import SoundPack from "../../components/Dashboard/SoundPackList/SoundPack";
import SuperFanTable from "../../components/Dashboard/SuperFanList/SuperFanTable";
import Text from "../../components/Text";

const SoundPackDetail = ({ soundPackTitle }) => {
  return (
    <Container>
      <BoardTitle title={`Sound Pack > ${soundPackTitle}`} color="black" />
      <Wrapper>
        <SoundPack />
        <ItemSmallBox />
      </Wrapper>
      <ListWrapper>
        <Text children="Team" size={20} $weight={700} color="black" />
        <SuperFanTable />
      </ListWrapper>
      <ListWrapper>
        <Text children="Super Fans" size={20} $weight={700} color="black" />
        <SuperFanTable />
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 10px;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;
export default SoundPackDetail;
