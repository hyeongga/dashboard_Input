import React from "react";
import styled from "styled-components";

const Input = ({ value, name, type, onChange, index = 0, artists, albums }) => {
  return (
    <Container type={type}>
      <Text>{name}</Text>
      {type === "line" ? (
        <TextArea
          value={value}
          name={name}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      ) : type === "dropDown" ? (
        <DropDown name={name} onChange={(e) => onChange(e)}>
          {artists != null
            ? artists.map((artist) => {
                return (
                  <option key={artist.id} value={artist.id}>
                    {artist.artistName}
                  </option>
                );
              })
            : albums.map((album) => {
                return (
                  <option key={album.id} value={album.id}>
                    {album.albumName}
                  </option>
                );
              })}
        </DropDown>
      ) : (
        <InputBox
          checked={value}
          value={value}
          name={name}
          type={type}
          onChange={(e) => {
            onChange(e, index);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.type === "line" ? "140px" : "50px")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 26px;
  margin-top: 20px;
  margin-bottom: 20px;

  .button {
    margin-left: 6px;
  }
`;

const TextArea = styled.textarea`
  flex: 1 0 auto;
  height: 140px;
  background-color: transparent;
  border: 1px solid #b5b5b5;
  color: white;
  font-size: 22px;
  padding-left: 6px;
`;

const DropDown = styled.select`
  flex: 1 0 auto;
  height: 50px;
`;

const InputBox = styled.input`
  flex: 1 0 auto;
  height: 50px;
  background-color: transparent;
  border: 1px solid #b5b5b5;
  color: white;
  font-size: 22px;
  padding-left: 6px;
`;

const Text = styled.p`
  font-size: 22px;
  margin-right: 50px;
  color: white;
`;

export default Input;
