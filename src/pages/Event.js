import React, { useEffect, useState, useCallback } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { fireStore as db } from "../Firebase";
import ListBox from "../components/ListBox";
import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();

  const navigation = useCallback((path, data) => {
    navigate(path, data);
  }, []);

  const getEvent = useCallback(async () => {
    const event = await getDocs(collection(db, "event"));
    const data = [];
    event.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });

    setEventData(data);
  }, [eventData]);

  const deleteEvent = useCallback(
    async (data) => {
      if (window.confirm(`${data.eventName}을 삭제하시겠습니까?`)) {
        await deleteDoc(doc(db, "event", data.id));
        setEventData(eventData.filter((event) => event.id !== data.id));
      }
    },
    [eventData]
  );

  const triggerEvent = useCallback(async (data) => {
    navigation("trigger", { state: { data } });
  }, []);

  const updateEvent = useCallback(async (data) => {
    navigation("update", { state: { data } });
  }, []);

  useEffect(() => {
    getEvent();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={() => navigation("create")} large>
          New
        </Button>
      </ButtonWrapper>
      {eventData.map((e) => {
        return (
          <ListBox
            data={e}
            texts={[e.eventName]}
            key={e.id}
            deleteHandler={deleteEvent}
            updateHandler={updateEvent}
            onClick={triggerEvent}
          />
        );
      })}
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
`;

export default Event;
