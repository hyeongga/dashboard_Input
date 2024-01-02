import styled from "styled-components";

import asterisk from "../../../../assets/icon/asterisk.svg";
import Text from "../../../Text";
import Input from "../../Input";
import Recipient from "./Recipient";
import AddRecipientButton from "../../Buttons/AddRecipientButton";
const Payment = () => {
  const User = [1, 2, 3, 4, 5, 6, 7];
  const percentage = 0;
  return (
    <Container>
      <TitleWrapper>
        <Text size={16} $weight={700} color="black">
          Payment (Username / %)
        </Text>
        <ImageWrapper>
          <img src={asterisk} alt="asterisk" />
        </ImageWrapper>

        <Text size={14} $weight={500} color="rgba(0, 0, 0, 0.40)">
          곡 참여자의 유저네임 정확히 입력해야 합니다. (5명까지 가능)
        </Text>
      </TitleWrapper>
      <RecipientWrapper>
        {User.map((v) => {
          return <Recipient index={v} />;
        })}
      </RecipientWrapper>
      <SubWrapper>
        <AddRecipientButton />
        <Text
          size={14}
          $weight={500}
          color={
            percentage < 100
              ? "rgba(0, 0, 0, 0.40)"
              : percentage === 100
              ? "#00CC52"
              : "#F00"
          }
        >
          {percentage}%
        </Text>
      </SubWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  align-items: start;
  justify-content: start;
  gap: 20px;
  margin-top: 20px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
`;

const ImageWrapper = styled.div`
  margin-left: 6px;
  margin-right: 32px;
`;

const RecipientWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const SubWrapper = styled.div`
  display: flex;
  gap: 220px;
`;
export default Payment;
