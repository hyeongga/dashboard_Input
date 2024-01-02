import React, { useState, useCallback, useEffect } from "react";
import Input from "../components/Input";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import { fireStore as db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

const RegisterArtist = () => {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    artistImage: {},
  });

  const [values, setValues] = useState({
    artistName: "",
    artistImage: "",
    company: "",
    artistDesc: "",
  });

  const inputType = {
    artistName: "",
    artistImage: "file",
    company: "",
    artistDesc: "line",
  };

  useEffect(() => {
    if (path === "/artist/update") {
      const data = { ...location.state.data };
      setValues({
        artistName: data.artistName,
        artistImage: "",
        company: data.company,
        artistDesc: data.artistDesc,
      });
    }
  }, []);

  const onChange = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;

      if (e.target.type === "file") {
        const file = e.target.files[0];
        setFiles({ ...files, [name]: file });
      }

      setValues({ ...values, [name]: value });
    },
    [values, files]
  );

  const uploadFiles = useCallback(async () => {
    let urls = {};
    const promises = Object.keys(files).map(async (e) => {
      const isImageNull = values.artistImage.length === 0;
      if (!isImageNull) {
        const imageRef = ref(storage, `artist_image/${files[e].name}`);
        await uploadBytes(imageRef, files[e]);

        const url = await getDownloadURL(imageRef);
        urls = { ...urls, [e]: url };
      }
    });
    await Promise.all(promises);
    return urls;
  }, [files, values]);

  const createArtist = useCallback(async () => {
    alert("등록하려면 닫기를 누르세요!");
    const urls = await uploadFiles();
    const uploadData = Object.assign(values, urls);

    await addDoc(collection(db, "artist"), uploadData);
    alert("등록을 완료했습니다");
    navigate("/artist");
  }, [values]);

  const updateArtist = useCallback(async () => {
    alert("업데이트하려면 닫기를 누르세요!");
    const urls = await uploadFiles();
    const uploadData = Object.assign(values, urls);

    Object.keys(files).forEach((e) => {
      const isFileNull = values[e] === "";
      if (isFileNull) delete uploadData[e];
    });

    const data = { ...location.state.data };
    const artistRef = doc(db, "artist", data.id);
    await updateDoc(artistRef, uploadData);
    alert("업데이트를 완료했습니다");
    navigate("/artist");
  }, [values, files]);

  return (
    <Container>
      <ButtonWrapper>
        <Button
          onClick={() => {
            path === "/artist/update" ? updateArtist() : createArtist();
          }}
          large
        >
          {path === "/artist/update" ? "update" : "upload"}
        </Button>
      </ButtonWrapper>
      <Text>Artist</Text>
      <InputWrapper>
        {Object.keys(values).map((e) => {
          return (
            <Input
              key={e}
              type={inputType[e]}
              name={e}
              value={values[e]}
              onChange={onChange}
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

export default RegisterArtist;
