import styled from "styled-components";

import BoardSubTitle from "../BoardSubTitle";
import SoundPack from "./SoundPack";
import Text from "../../Text";

const SoundPackWrap = ({ soundPackData }) => {
  return (
    <Container>
      <BoardSubTitle title="Sound Packs" path="/dashboard/soundpack" />
      <ScoundPackContainer>
        {soundPackData ? (
          <SoundPackWrapper>
            {soundPackData.map((v) => (
              <div key={v.id}>
                <SoundPack
                  img={v.albumCover}
                  soundPackTitle={v.albumName}
                  boxSize={"180px"}
                />
              </div>
            ))}
          </SoundPackWrapper>
        ) : (
          <EmptyBox>
            <Text
              children="Upload your sound pack"
              color="rgba(33, 43, 54, 0.30)"
              size={18}
              $weight={500}
            />
          </EmptyBox>
        )}
      </ScoundPackContainer>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
`;
const ScoundPackContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const SoundPackWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 18px;
`;
const EmptyBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default SoundPackWrap;
