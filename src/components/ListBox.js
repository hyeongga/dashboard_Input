import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import styled from "styled-components";

const ListBox = ({ data, deleteHandler, updateHandler, texts, onClick }) => {
  return (
    <Container>
      <TextBox
        onClick={() => {
          if (onClick != null) onClick(data);
        }}
      >
        {texts.map((e, index) => {
          return <Text key={index}>{e}</Text>;
        })}
      </TextBox>
      <IconBox>
        <FiEdit
          className="icon"
          color="white"
          onClick={() => updateHandler(data)}
        />
        <IoTrashOutline
          className="icon"
          color="white"
          onClick={() => deleteHandler(data)}
        />
      </IconBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;
  background-color: #232323;
  height: 66px;
  display: flex;
  flex-direction: row;
`;

const TextBox = styled.div`
  width: calc(100% - 140px);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconBox = styled.div`
  width: 140px;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    width: 20px;
    height: 20px;
    margin-right: 50px;
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 22px;
  color: white;
  margin-right: 50px;
  margin-left: 50px;
`;

export default ListBox;
