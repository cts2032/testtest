import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const NewPostButton = styled.button`
  border: none;
  background-color: transparent;
  color: #c7e8ca;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #5d9c59;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Post = styled.div`
  width: 30%;
  margin-bottom: 20px;
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const PostContent = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
`;

export const PostTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const PostDescription = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
`;

export const PostDate = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 12px;
  color: #8e8e8e;
`;
