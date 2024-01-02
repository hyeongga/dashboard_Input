import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../../Text";

const SoundPack = ({ img, soundPackTitle, boxSize }) => {
  return (
    <Link to={`/dashboard/soundpack/${soundPackTitle}`}>
      <Container>
        <AlbumCover src={img} alt="Sound Pack" boxSize={boxSize} />
        <TextWrapper>
          <Text
            children={soundPackTitle}
            $weight={500}
            color="black"
            size={16}
          />
        </TextWrapper>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  width: fit-content;
  display: inline-flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;
const AlbumCover = styled.img`
  width: ${({ boxSize }) => (boxSize ? boxSize : `180px`)};
  height: ${({ boxSize }) => (boxSize ? boxSize : `180px`)};
  border-radius: 15px;
  background: "white";
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
`;
const TextWrapper = styled.div`
  display: flex;
  padding: 0px 10px;

  justify-content: center;
  align-items: center;
`;
export default SoundPack;
