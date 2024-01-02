import React, { useState, useCallback, useEffect } from "react";
import Input from "../components/Input";
import styled from "styled-components";
import InputWrapper from "../components/InputWrapper";
import Button from "../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { fireStore as db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const RegisterAlbum = () => {
  const location = useLocation();
  const path = location.pathname;
  const [artistData, setArtistData] = useState([]);
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    albumCover: {},
    source: [{}],
    thumbnail: [{}],
    backImage: [{}],
    original: [{}],
  });

  const [artistValues, setArtistValues] = useState({
    artistId: "",
  });

  const [albumValues, setAlbumValues] = useState({
    albumName: "",
    albumCover: "",
    isOriginal: false,
    releaseDate: "",
    releaseTime: "",
    expireDate: "",
    albumDesc: "",
  });

  const [connectValues, setConnectValues] = useState({
    keyKind: "",
    keyType: "",
    connKeyDesc: "",
    benefit: "",
  });

  const [connKeyValues, setConnKeyValues] = useState([
    {
      thumbnail: "",
      backImage: "",
      original: "",
      type: "",
      weight: "",
    },
  ]);

  const [trackValues, setTrackValues] = useState([
    {
      title: "",
      source: "",
      duration: "",
      genre: "",
      url: "",
      lyrics: "",
      description: "",
    },
  ]);

  const inputType = {
    artistId: "dropDown",
    albumName: "",
    albumCover: "file",
    isOriginal: "checkbox",
    releaseDate: "date",
    expireDate: "date",
    releaseTime: "time",
    albumDesc: "line",
    title: "",
    source: "file",
    duration: "",
    genre: "",
    url: "",
    lyrics: "line",
    description: "line",
    totalConn: "",
    connType: "",
    connKeyDesc: "line",
    benefit: "line",
    thumbnail: "file",
    backImage: "file",
    original: "file",
    type: "",
    weight: "",
  };

  const getArtist = async () => {
    const artist = await getDocs(collection(db, "artist"));
    const data = [];
    artist.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    setArtistData(data);
    setArtistValues({ ...artistValues, artistId: data[0].id });
  };

  const addTrackData = () => {
    const newValue = [];
    const newFile = [];

    trackValues.forEach((e) => {
      newValue.push(e);
    });

    newValue.push({
      title: "",
      source: "",
      duration: "",
      genre: "",
      url: "",
      lyrics: "",
      description: "",
    });

    files.source.forEach((e) => {
      newFile.push(e);
    });
    newFile.push({});

    setTrackValues(newValue);
    setFiles({ ...files, source: newFile });
  };

  const subTrackData = () => {
    const newValue = [...trackValues];
    newValue.pop();
    console.log(newValue);
    setTrackValues(newValue);
  };

  const addConnKeyData = () => {
    const newValue = [];
    const newThumbnail = [];
    const newBackImage = [];
    const newOriginal = [];

    connKeyValues.forEach((e) => {
      newValue.push(e);
    });

    newValue.push({
      thumbnail: "",
      backImage: "",
      original: "",
      type: "",
      weight: "",
    });
    setConnKeyValues(newValue);

    files.thumbnail.forEach((e) => {
      newThumbnail.push(e);
    });
    newThumbnail.push({});

    files.backImage.forEach((e) => {
      newBackImage.push(e);
    });
    newBackImage.push({});

    files.original.forEach((e) => {
      newOriginal.push(e);
    });
    newOriginal.push({});

    setFiles({
      ...files,
      thumbnail: newThumbnail,
      backImage: newBackImage,
      original: newOriginal,
    });
  };

  const subConnKeyData = () => {
    const newValue = [...connKeyValues];
    newValue.pop();
    console.log(newValue);
    setConnKeyValues(newValue);
  };

  const onTrackChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      const newSources = [...files.source];
      newSources.splice(index, 1, file);
      const newValue = { ...files, source: newSources };
      setFiles(newValue);
    }

    const newValue = { ...trackValues[index], [name]: value };
    const newArray = [...trackValues];
    newArray.splice(index, 1, newValue);
    setTrackValues(newArray);
  };

  const onConnKeyChange = (e, index) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      const newSources = [...files[name]];
      newSources.splice(index, 1, file);
      const newValue = { ...files, [name]: newSources };
      setFiles(newValue);
    }

    const newValue = { ...connKeyValues[index], [name]: value };
    const newArray = [...connKeyValues];
    newArray.splice(index, 1, newValue);
    setConnKeyValues(newArray);
  };

  const onConnectChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setConnectValues({ ...connectValues, [name]: value });
  };

  const onArtistChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setArtistValues({ ...artistValues, [name]: value });
  };

  const onAlbumChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "file") {
      const file = e.target.files[0];
      setFiles({ ...files, [name]: file });
    }

    if (e.target.type === "checkbox") {
      setAlbumValues({ ...albumValues, [name]: !albumValues[name] });
    } else {
      setAlbumValues({ ...albumValues, [name]: value });
    }
  };

  const uploadFiles = async (albumValues, connKeyValues, trackValues) => {
    if (albumValues.albumCover.length !== 0) {
      const fileRef = ref(storage, `album_image/${files.albumCover.name}`);
      await uploadBytes(fileRef, files.albumCover);

      const url = await getDownloadURL(fileRef);
      albumValues.albumCover = url;
    }

    const trackPromise = trackValues.map(async (e, index) => {
      if (e.source.length !== 0) {
        const fileRef = ref(storage, `music/${files.source[index].name}`);
        await uploadBytes(fileRef, files.source[index]);

        const url = await getDownloadURL(fileRef);
        trackValues[index].source = url;
      }
    });

    const connKeyPromise = connKeyValues.map(async (e, index) => {
      if (e.thumbnail.length !== 0) {
        const fileRef = ref(
          storage,
          `track_thumbnail/${files.thumbnail[index].name}`
        );
        await uploadBytes(fileRef, files.thumbnail[index]);

        const url = await getDownloadURL(fileRef);
        connKeyValues[index].thumbnail = url;
      }
      if (e.backImage.length !== 0) {
        const fileRef = ref(
          storage,
          `back_image/${files.backImage[index].name}`
        );
        await uploadBytes(fileRef, files.backImage[index]);

        const url = await getDownloadURL(fileRef);
        connKeyValues[index].backImage = url;
      }
      if (e.original.length !== 0) {
        const fileRef = ref(storage, `original/${files.original[index].name}`);
        await uploadBytes(fileRef, files.original[index]);

        const url = await getDownloadURL(fileRef);
        connKeyValues[index].original = url;
      }
    });

    await Promise.all([...trackPromise, ...connKeyPromise]);
    return {
      ...albumValues,
      track: trackValues,
      connKey: connKeyValues,
      artistId: artistValues.artistId,
    };
  };

  const setAlbum = async () => {
    await getArtist();
    if (path === "/album/update") {
      const data = { ...location.state.data };

      setArtistValues({
        artistId: data.artistId,
      });

      setAlbumValues({
        albumName: data.albumName,
        albumCover: "",
        isOriginal: data.isOriginal,
        releaseDate: data.releaseDate,
        releaseTime: data.releaseTime,
        expireDate: data.expireDate,
        albumDesc: data.albumDesc,
      });

      setConnectValues({
        keyKind: data.keyKind,
        keyType: data.keyType,
        connKeyDesc: data.connKeyDesc,
        benefit: data.benefit,
      });

      const track = data.track.map((e) => {
        return {
          title: e.title,
          source: "",
          duration: e.duration,
          genre: e.genre,
          url: e.url,
          lyrics: e.lyrics,
          description: e.description,
        };
      });

      setTrackValues(track);

      const connKey = [];
      data.connKey.forEach((e) => {
        connKey.push({
          thumbnail: "",
          backImage: "",
          original: "",
          type: e.type,
          weight: e.weight,
        });
      });

      setConnKeyValues(connKey);
    }
  };

  useEffect(() => {
    setAlbum();
  }, []);

  const createAlbum = useCallback(async () => {
    alert("등록하려면 닫기를 누르세요!");
    const fileData = await uploadFiles(
      { ...albumValues },
      [...connKeyValues],
      [...trackValues]
    );
    let uploadData = Object.assign(connectValues, fileData);
    uploadData = Object.assign(uploadData, artistValues);
    await addDoc(collection(db, "album"), uploadData);
    alert("등록을 완료했습니다");
    navigate("/album");
  }, [albumValues, connKeyValues, trackValues, connectValues, artistValues]);

  const updateAlbum = useCallback(async () => {
    alert("업데이트하려면 닫기를 누르세요!");
    const data = { ...location.state.data };
    const fileData = await uploadFiles(
      { ...albumValues },
      [...connKeyValues],
      [...trackValues]
    );
    let uploadData = Object.assign(connectValues, fileData);
    uploadData = Object.assign(uploadData, artistValues);

    if (albumValues.albumCover === "") {
      uploadData.albumCover = data.albumCover;
    }

    trackValues.forEach((e, index) => {
      if (e.source === "") {
        if (index < data.track.length) {
          uploadData.track[index].source = data.track[index].source;
        }
      }
    });

    connKeyValues.forEach((e, index) => {
      if (e.backImage === "") {
        if (index < data.connKey.length)
          uploadData.connKey[index].backImage = data.connKey[index].backImage;
      }
      if (e.original === "") {
        if (index < data.connKey.length)
          uploadData.connKey[index].original = data.connKey[index].original;
      }
      if (e.thumbnail === "") {
        if (index < data.connKey.length)
          uploadData.connKey[index].thumbnail = data.connKey[index].thumbnail;
      }
    });

    const albumRef = doc(db, "album", data.id);
    await updateDoc(albumRef, uploadData);
    alert("업데이트를 완료했습니다");
    navigate("/album");
  }, [albumValues, connKeyValues, trackValues, connectValues, artistValues]);

  return (
    <Container>
      <ButtonWrapper>
        <Button
          onClick={() => {
            path === "/album/update" ? updateAlbum() : createAlbum();
          }}
          large
        >
          {path === "/album/update" ? "update" : "upload"}
        </Button>
      </ButtonWrapper>

      <Text>Artist</Text>
      <InputWrapper>
        {Object.keys(artistValues).map((e) => {
          {
            return (
              <Input
                key={e}
                type={inputType[e]}
                name={e}
                value={artistValues[e]}
                artists={artistData}
                onChange={onArtistChange}
              />
            );
          }
        })}
      </InputWrapper>

      <Text>Album</Text>
      <InputWrapper>
        {Object.keys(albumValues).map((e) => {
          return (
            <Input
              key={e}
              type={inputType[e]}
              name={e}
              value={albumValues[e]}
              onChange={onAlbumChange}
            />
          );
        })}
      </InputWrapper>

      <Text>Track List</Text>
      {trackValues.map((e, index) => {
        return (
          <InputWrapper key={index}>
            {Object.keys(e).map((key) => {
              return (
                <Input
                  index={index}
                  key={key}
                  type={inputType[key]}
                  name={key}
                  value={e[key]}
                  onChange={onTrackChange}
                />
              );
            })}
          </InputWrapper>
        );
      })}
      <PlusButtonWrapper>
        <AiFillMinusCircle
          onClick={() => {
            subTrackData();
          }}
          size={50}
          color="white"
          className="btn"
        />
        <AiFillPlusCircle
          onClick={() => {
            addTrackData();
          }}
          size={50}
          color="white"
          className="btn"
        />
      </PlusButtonWrapper>

      <Text>Connect</Text>
      <InputWrapper>
        {Object.keys(connectValues).map((e) => {
          return (
            <Input
              key={e}
              type={inputType[e]}
              name={e}
              value={connectValues[e]}
              onChange={onConnectChange}
            />
          );
        })}
      </InputWrapper>

      {connKeyValues.map((e, index) => {
        return (
          <InputWrapper key={index}>
            {Object.keys(e).map((key) => {
              return (
                <Input
                  index={index}
                  key={key}
                  type={inputType[key]}
                  name={key}
                  value={e[key]}
                  onChange={onConnKeyChange}
                />
              );
            })}
          </InputWrapper>
        );
      })}
      <PlusButtonWrapper>
        <AiFillMinusCircle
          onClick={() => {
            subConnKeyData();
          }}
          size={50}
          color="white"
          className="btn"
        />
        <AiFillPlusCircle
          onClick={() => {
            addConnKeyData();
          }}
          size={50}
          color="white"
          className="btn"
        />
      </PlusButtonWrapper>
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

const PlusButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: "100%";

  .btn {
    cursor: pointer;
  }
`;

export default RegisterAlbum;
