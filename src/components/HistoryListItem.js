import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { fireStore as db } from "../Firebase";

const HistoryListItem = ({ select, id, index, date, onClick }) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const docRef = doc(db, "user", id);
    const docSnap = await getDoc(docRef);
    setData(docSnap.data());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Radio>
        <RadioButton
          color={select ? "red" : ""}
          onClick={() => {
            onClick(index);
          }}
        />
      </Radio>
      <Text>{data.name}</Text>
      <Text>{data.wallet}</Text>
      <Text>{date}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-left: 40px;
  display: flex;
  margin-bottom: 50px;
`;

const Text = styled.div`
  color: white;
  font-size: 22px;
  margin-right: 50px;
`;

const Radio = styled.div`
  margin-right: 20px;
`;

const RadioButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color || "white"};
  margin-right: 16px;
`;

export default HistoryListItem;
