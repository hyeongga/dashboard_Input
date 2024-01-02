import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import InputWrapper from "../components/InputWrapper";
import { useLocation, useNavigate } from "react-router-dom";
import { fireStore as db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const RegisterEvent = () => {
  const location = useLocation();
  const path = location.pathname;
  const [albumData, setAlbumData] = useState([]);

  const navigate = useNavigate();
  const [files, setFiles] = useState({
    ticketFrontImage: {},
    ticketBackImage: {},
  });

  const [values, setValues] = useState({
    albumId: "",
    eventName: "",
    eventDate: "",
    ticketFrontImage: "",
    ticketBackImage: "",
    ticketAccount: "",
  });

  const inputType = {
    albumId: "dropDown",
    eventName: "",
    eventDate: "date",
    ticketFrontImage: "file",
    ticketBackImage: "file",
    ticketAccount: "",
  };

  const getAlbum = async () => {
    const album = await getDocs(collection(db, "album"));
    const data = [];
    album.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setAlbumData(data);
    setValues({ ...values, albumId: data[0].id });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFiles({ ...files, [name]: file });
    }

    setValues({ ...values, [name]: value });
  };

  const updateEvent = async () => {
    alert("업데이트하려면 닫기를 누르세요!");
    const urls = await uploadFiles();
    const uploadData = Object.assign(values, urls);

    Object.keys(files).forEach((e) => {
      const isFileNull = values[e] === "";
      if (isFileNull) delete uploadData[e];
    });

    const data = { ...location.state.data };
    const eventRef = doc(db, "event", data.id);
    await updateDoc(eventRef, uploadData);
    alert("업데이트를 완료했습니다");
    navigate("/event");
  };

  const uploadFiles = async () => {
    let urls = {};
    const promises = Object.keys(files).map(async (e) => {
      if (values[e].length !== 0) {
        const imageRef = ref(storage, `event_image/${files[e].name}`);
        await uploadBytes(imageRef, files[e]);

        const url = await getDownloadURL(imageRef);
        urls = { ...urls, [e]: url };
      }
    });
    await Promise.all(promises);
    return urls;
  };

  const createEvent = async () => {
    alert("등록하려면 닫기를 누르세요!");
    const urls = await uploadFiles();
    const uploadData = Object.assign(values, urls);

    await addDoc(collection(db, "event"), uploadData);
    alert("등록을 완료했습니다");
    navigate("/event");
  };

  const setting = async () => {
    await getAlbum();
    if (path === "/event/update") {
      const data = { ...location.state.data };
      setValues({
        albumId: data.albumId,
        eventName: data.eventName,
        eventDate: data.eventDate,
        ticketFrontImage: "",
        ticketBackImage: "",
        ticketAccount: data.ticketAccount,
      });
    }
  };

  useEffect(() => {
    setting();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button
          onClick={() => {
            path === "/event/update" ? updateEvent() : createEvent();
          }}
          large
        >
          {path === "/event/update" ? "update" : "upload"}
        </Button>
      </ButtonWrapper>
      <Text>event</Text>
      <InputWrapper>
        {Object.keys(values).map((e) => {
          return (
            <Input
              key={e}
              type={inputType[e]}
              name={e}
              value={values[e]}
              onChange={onChange}
              albums={albumData}
            />
          );
        })}
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100% - 260px);
  padding-left: 130px;
  padding-right: 130px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
`;

const Text = styled.p`
  font-size: 32px;
  margin-bottom: 18px;
  color: white;
`;

export default RegisterEvent;
