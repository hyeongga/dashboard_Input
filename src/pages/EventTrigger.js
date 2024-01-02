import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { fireStore as db, storage } from "../Firebase";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import Button from "../components/Button";

const EventTrigger = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isExistTicket, setIsExistTicket] = useState(false);
  const [ticketUser, setTicketUser] = useState([]);
  const [radio, setRadio] = useState(false);

  const getOwner = async (data) => {
    const collectionRef = collection(db, "collection");
    const q = query(collectionRef, where("albumId", "==", data.albumId));

    const querySnapshot = await getDocs(q);
    const result = [];

    querySnapshot.forEach((doc) => {
      const uid = doc.data().uid;
      const isNotContainUid = result.indexOf(uid) === -1;

      if (isNotContainUid) result.push(doc.data().uid);
    });

    setUserId(result);
  };

  const getRandomElementsFromArray = (array, count) => {
    const shuffledArray = array.slice();
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray.slice(0, count);
  };

  const getUser = async () => {
    const data = [];
    const promises = userId.map(async (e) => {
      const docRef = doc(db, "user", e);
      const docSnap = await getDoc(docRef);
      data.push(docSnap.data());
    });
    await Promise.all(promises);
    setUserData(data);
  };

  const selectOption = () => {
    if (radio) setRadio(false);
    else setRadio(true);
  };

  const selectTicket = async () => {
    alert("티켓발행을하려면 닫기를 누르세요!");
    const data = { ...location.state.data };
    const ticketAccount = Number(data.ticketAccount);

    const winner = getRandomElementsFromArray(userId, ticketAccount);

    const promises = winner.map(async (e, index) => {
      const eventCollection = {
        type: "ticket",
        uid: e,
        eventId: data.id,
        number: "#" + index,
      };
      await addDoc(collection(db, "collection"), eventCollection);
    });

    await Promise.all(promises);
    setIsExistTicket(true);

    alert("티켓발행을 완료했습니다.");
    navigate("/event");
  };

  const checkExistTicket = async () => {
    const data = { ...location.state.data };
    const collectionRef = collection(db, "collection");
    const q = query(collectionRef, where("eventId", "==", data.id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      const uid = doc.data().uid;

      setTicketUser([...ticketUser, uid]);
    });

    const size = querySnapshot.size;

    if (size !== 0) setIsExistTicket(true);
  };

  useEffect(() => {
    checkExistTicket();
  }, []);

  useEffect(() => {
    getUser();
  }, [userId]);

  useEffect(() => {
    const data = { ...location.state.data };
    getOwner(data);
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        {!isExistTicket ? (
          <Button
            onClick={() => {
              selectTicket();
            }}
            large
          >
            issue
          </Button>
        ) : null}
      </ButtonWrapper>
      <Radio>
        <RadioButton
          color={radio ? "red" : ""}
          onClick={() => {
            selectOption();
          }}
        />
        <RadioText>당첨자</RadioText>
      </Radio>
      <Wrapper>
        {userData.map((e) => {
          if (radio) {
            return ticketUser.indexOf(e.uid) !== -1 ? (
              <Item key={e.uid}>
                <Text>{e.name}</Text>
                <Text>{e.wallet}</Text>
                <Text>{e.phoneNumber}</Text>
                {ticketUser.indexOf(e.uid) !== -1 ? <Text>당첨</Text> : null}
              </Item>
            ) : null;
          } else {
            return (
              <Item key={e.uid}>
                <Text>{e.name}</Text>
                <Text>{e.wallet}</Text>
                <Text>{e.phoneNumber}</Text>
                {ticketUser.indexOf(e.uid) !== -1 ? <Text>당첨</Text> : null}
              </Item>
            );
          }
        })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 500px;
  padding-left: 130px;
  padding-right: 130px;
  display: flex;
  flex-direction: column;
`;

const Radio = styled.div`
  margin-bottom: 20px;
  width: calc(100%-92px);
  display: flex;
  align-items: center;
`;

const RadioButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color || "white"};
  margin-right: 16px;
`;

const RadioText = styled.div`
  font-size: 22px;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const Text = styled.div`
  font-size: 22px;
  color: white;
  margin-right: 30px;
`;

const Wrapper = styled.div`
  width: calc(100%-92px);
  background-color: #232323;
  border-radius: 20px;
  padding-left: 46px;
  padding-right: 46px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export default EventTrigger;
