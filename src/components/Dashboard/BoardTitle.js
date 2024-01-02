import styled from "styled-components";
import uploadIcon from "../../assets/icon/uploadIcon.svg";
import Button from "./Button";
import Text from "../Text";
import { Link } from "react-router-dom";
const BoardTitle = ({ title, color, btn, path }) => {
  return (
    <HeaderWrapper>
      <Text children={title} color={color} size={30} $weight={700} />
      {btn ? (
        <Link to={path} style={{ textDecoration: "none" }}>
          <Button
            bgColor="black"
            fontColor="#00c4b9"
            children={
              <TextWrapper>
                <img src={uploadIcon} alt="uploadIcon" />
                Upload SoundPack
              </TextWrapper>
            }
          />
        </Link>
      ) : (
        ""
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export default BoardTitle;
