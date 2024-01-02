import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { fireStore as db } from "../Firebase";
import HistoryListItem from "../components/HistoryListItem";

const PurchaseHistory = () => {
  const location = useLocation();
  const data = { ...location.state.data };
  const [soundPackLog, setSoundPackLog] = useState([]);
  const [connectLog, setConnectLog] = useState([]);
  const [soundPackSelect, setSoundPackSelect] = useState([]);
  const [connectSelect, setConnectSelect] = useState([]);
  const [totalSoundPackSelect, setTotalSoundPackSelect] = useState(false);
  const [totalConnectSelect, setTotalConnectSelect] = useState(false);
  const [holders, setHolders] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    getLogData();
  }, []);

  const selectRadio = (index) => {
    if (index >= soundPackSelect.length) {
      const temp = [...connectSelect];
      temp[index - soundPackSelect.length] =
        !temp[index - soundPackSelect.length];
      setConnectSelect(temp);
    } else {
      const temp = [...soundPackSelect];
      let id = soundPackLog[index].userId;
      if (temp[index] === false) {
        temp[index] = true;
        if (Object.keys(holders).indexOf(id) === -1) {
          setHolders({ ...holders, [id]: 1 });
        } else {
          let newCount = holders[id] + 1;
          setHolders({ ...holders, [id]: newCount });
        }
      } else {
        temp[index] = false;
        let tempObj = { ...holders };
        let newCount = tempObj[id] - 1;
        tempObj[id] = newCount;

        if (newCount === 0) {
          delete tempObj[id];
        }
        setHolders(tempObj);
      }
      setSoundPackSelect(temp);
      console.log(holders);
    }
  };

  useEffect(() => {
    const newValue = Array(soundPackSelect.length).fill(totalSoundPackSelect);
    setSoundPackSelect(newValue);

    let holders = {};
    if (totalSoundPackSelect) {
      soundPackLog.map((e) => {
        const id = e.userId;
        if (Object.keys(holders).indexOf(id) === -1) {
          holders = { ...holders, [id]: 1 };
        } else {
          let newCount = holders[id] + 1;
          holders = { ...holders, [id]: newCount };
        }
      });
    }

    setHolders(holders);
  }, [totalSoundPackSelect]);

  useEffect(() => {
    const newValue = Array(connectSelect.length).fill(totalConnectSelect);
    setConnectSelect(newValue);
  }, [totalConnectSelect]);

  const getLogData = async () => {
    const logRef = collection(db, "buyLog");
    const q = query(logRef, where("albumId", "==", data.id));

    const packResult = [];
    const connectResult = [];
    const packSelect = [];
    const connectSelect = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      if (doc.data().type === "Sound Pack") {
        packResult.push({ ...doc.data(), id: doc.id });
        packSelect.push(false);
      } else {
        connectResult.push({ ...doc.data(), id: doc.id });
        connectSelect.push(false);
      }
    });

    setSoundPackSelect(packSelect);
    setConnectSelect(connectSelect);
    setSoundPackLog(packResult);
    setConnectLog(connectResult);
  };

  return (
    <Container>
      <Title>Purchase History</Title>
      <Title style={{ fontSize: "28px" }}>{data.albumName}</Title>
      <Title style={{ fontSize: "28px" }}>sound pack</Title>
      <Radio>
        <RadioButton
          color={totalSoundPackSelect ? "red" : ""}
          onClick={() => {
            setTotalSoundPackSelect(!totalSoundPackSelect);
          }}
        />
        <Text>전체선택</Text>
      </Radio>

      <Wrapper>
        {soundPackLog.map((e, index) => {
          return (
            <HistoryListItem
              key={e.id}
              select={soundPackSelect[index]}
              index={index}
              id={e.userId}
              date={e.buyDate}
              onClick={selectRadio}
            />
          );
        })}
      </Wrapper>
      <Wrapper style={{ height: "180px" }}>
        <TextWrapper>
          <Text>selected holders</Text>
          <Text>{Object.keys(holders).length}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>selected number</Text>
          <Text>
            {soundPackSelect.filter((select) => select === true).length}
          </Text>
        </TextWrapper>
      </Wrapper>

      <Title style={{ fontSize: "28px" }}>connect</Title>
      <Radio>
        <RadioButton
          color={totalConnectSelect ? "red" : ""}
          onClick={() => {
            setTotalConnectSelect(!totalConnectSelect);
          }}
        />
        <Text>전체선택</Text>
      </Radio>
      <Wrapper>
        {connectLog.map((e, index) => {
          return (
            <HistoryListItem
              key={e.id}
              select={connectSelect[index]}
              index={index + soundPackSelect.length}
              id={e.userId}
              date={e.buyDate}
              onClick={selectRadio}
            />
          );
        })}
      </Wrapper>
      <Wrapper style={{ height: "180px" }}>
        <TextWrapper>
          <Text>selected number</Text>
          <Text>
            {connectSelect.filter((select) => select === true).length}
          </Text>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 260px);
  padding-left: 130px;
  padding-right: 130px;
`;

const Title = styled.div`
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
`;

const Radio = styled.div`
  margin-right: 20px;
  display: flex;
  margin-bottom: 20px;
`;

const RadioButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color || "white"};
  margin-right: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  padding-left: 30px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  color: white;
  font-size: 30px;
  margin-right: 80px;
`;

const Wrapper = styled.div`
  border-radius: 15px;
  width: 100%;
  background-color: #232323;
  height: 600px;
  margin-bottom: 10px;
  padding-top: 20px;
  overflow: scroll;
`;

export default PurchaseHistory;
