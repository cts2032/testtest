import React from "react";
import {
  Container,
  Header,
  NewPostButton,
  Post,
  PostContainer,
  PostContent,
  PostDate,
  PostDescription,
  PostImage,
  PostTitle,
  Title,
} from "./BestRecipeSty";
import { Link } from "react-router-dom";

const BestRecipeForm = () => {
  return (
    <Container>
      <Header>
        <Title>게시글 목록</Title>
        <Link to="/best/newposts">
          <NewPostButton>새 게시글</NewPostButton>
        </Link>
      </Header>
      <PostContainer>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
        <Post>
          <PostImage src="https://picsum.photos/200" />
          <PostContent>
            <PostTitle>게시글 제목</PostTitle>
            <PostDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consequat sapien eu eros varius sagittis.
            </PostDescription>
            <PostDate>2023.04.23</PostDate>
          </PostContent>
        </Post>
      </PostContainer>
    </Container>
  );
};

export default BestRecipeForm;
