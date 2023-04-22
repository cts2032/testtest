import React, { useState } from "react";
import styled from "styled-components";
import { Button, Container, Form, Header, Input } from "./RegisterSty";

export const RegContainer = styled.form`
  border: none;
  box-shadow: 1px 5px 10px 5px lightgray;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 1rem;
  width: 800px;
  height: 60vh;
  display: flex;
  flex-direction: column;
`;
export const RegLabel = styled.label``;

const RegisterForm = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Id:", id);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Header>회원가입</Header>
        <Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <Button type="submit">Regist</Button>
      </Form>
    </Container>
  );
};

export default RegisterForm;
