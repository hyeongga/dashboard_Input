import styled from "styled-components";
import Text from "../Text";
import { Link } from "react-router-dom";
const BoardSubTitle = ({ title, path }) => {
  return (
    <Container>
      <Text children={title} color="black" $weight={700} size={20} />
      <Link to={path} style={{ textDecoration: "none" }}>
        <Text children="more >" color="black" $weight={500} size={18} />
      </Link>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default BoardSubTitle;
