
import React from "react";
import { Button, Container } from "../styles";
import { ContentForm, Input, TextForm, TextButton } from "./styles";

const AddPost = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.titulo.value);
    e.target.titulo.value = "";
    e.target.subtitulo.value = "";
}

  return (
    <Container>
      <ContentForm onSubmit={handleOnSubmit}>
        <TextForm></TextForm>
        <Input placeholder="Título" name="titulo" />
        <Button onSubmit={handleOnSubmit}>
            <TextButton>Add</TextButton>
        </Button>
        <hr />
      </ContentForm>
    </Container>
  );
};

export default AddPost;