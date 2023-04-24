import React from "react";
import {
  Button,
  Container,
  Form,
  Header,
  Input,
  Textarea,
  Title,
} from "./NewPostSty";

const NewPost = () => {
  return (
    <Container>
      <Header>
        <Title>새 게시글 작성</Title>
      </Header>
      <Form>
        <Input type="text" placeholder="제목" />
        <Textarea placeholder="내용" />
        <Button>게시하기</Button>
      </Form>
    </Container>
  );
};

export default NewPost;
