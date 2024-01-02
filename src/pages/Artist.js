import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { fireStore as db } from "../Firebase";
import ListBox from "../components/ListBox";
import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Artist = () => {
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  const navigation = useCallback((path, data) => {
    navigate(path, data);
  }, []);

  const getArtist = useCallback(async () => {
    const artist = await getDocs(collection(db, "artist"));
    const data = [];
    artist.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setArtistData(data);
  }, [artistData]);

  const deleteArtist = useCallback(
    async (data) => {
      if (window.confirm(`${data.artistName}을 삭제하시겠습니까?`)) {
        await deleteDoc(doc(db, "artist", data.id));
        setArtistData(artistData.filter((artist) => artist.id !== data.id));
      }
    },
    [artistData]
  );

  const updateArtist = useCallback(async (data) => {
    navigation("update", { state: { data } });
  }, []);

  useEffect(() => {
    getArtist();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={() => navigation("create")} large>
          New
        </Button>
      </ButtonWrapper>
      {artistData.map((e) => {
        return (
          <ListBox
            data={e}
            key={e.id}
            texts={[e.artistName]}
            deleteHandler={deleteArtist}
            updateHandler={updateArtist}
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

export default Artist;
