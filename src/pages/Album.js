import React, { useEffect, useState, useCallback } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { fireStore as db } from "../Firebase";
import ListBox from "../components/ListBox";
import Button from "../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Album = () => {
  const [albumData, setAlbumData] = useState([]);
  const navigate = useNavigate();

  const navigation = useCallback((path, data) => {
    navigate(path, data);
  }, []);

  const getAlbum = useCallback(async () => {
    const album = await getDocs(collection(db, "album"));
    const data = [];
    album.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setAlbumData(data);
  }, [albumData]);

  const deleteAlbum = useCallback(
    async (data) => {
      if (window.confirm(`${data.albumName}을 삭제하시겠습니까?`)) {
        await deleteDoc(doc(db, "album", data.id));
        setAlbumData(albumData.filter((album) => album.id !== data.id));
      }
    },
    [albumData]
  );

  const updateAlbum = useCallback(async (data) => {
    navigation("update", { state: { data } });
  }, []);

  const viewPurchaseHistory = (data) => {
    navigation("history", { state: { data } });
  };

  useEffect(() => {
    getAlbum();
  }, []);

  return (
    <Container>
      <ButtonWrapper>
        <Button onClick={() => navigation("create")} large>
          New
        </Button>
      </ButtonWrapper>
      {albumData.map((e) => {
        return (
          <ListBox
            data={e}
            texts={[e.albumName]}
            key={e.id}
            deleteHandler={deleteAlbum}
            updateHandler={updateAlbum}
            onClick={viewPurchaseHistory}
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

export default Album;
