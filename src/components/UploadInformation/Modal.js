import styled from "styled-components";
import Text from "../Text";
import OkButton from "../UploadInformation/Buttons/OkButton";
import { useState } from "react";
const Modal = ({ contents }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    isOpen && (
      <FixedContainer>
        <FullScreenBackground>
          <ModalContainer>
            <Text size={22} $weight={700} color="black">
              {contents}
            </Text>
            <OkButton setIsOpen={setIsOpen} />
          </ModalContainer>
        </FullScreenBackground>
      </FixedContainer>
    )
  );
};
const FixedContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow-y: auto;
`;

const FullScreenBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.18);
  z-index: 10;
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 337px;
  height: 204px;
  flex-shrink: 0;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;

  text-align: center;
  white-space: pre-line;

  border-radius: 20px;
  border: 3px solid #000;
`;

export default Modal;
