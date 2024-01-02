import styled from "styled-components";

const Text = ({
  children,
  $weight = 500,
  size = 16,
  color = "#ffffff",
  lineHeight = "normal",
}) => {
  return (
    <StyledText
      $weight={$weight}
      color={color}
      size={size}
      lineHeight={lineHeight}
    >
      {children}
    </StyledText>
  );
};

const StyledText = styled.span`
  font-weight: ${({ $weight }) => $weight};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: "DM Sans";
`;

export default Text;
