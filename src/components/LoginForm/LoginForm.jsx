import React, { useState } from "react";
import {
  Button,
  Button2,
  Container,
  Form,
  Header,
  Input,
} from "./LoginFormSty";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Form>
        <Header>로그인</Header>
        <Input
          type="text"
          placeholder="아이디를 입력하세요."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
        <Link
          to="/signup"
          style={{ justifyContent: "center", marginTop: "10px" }}
        >
          <Button2 type="submit">회원가입</Button2>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginForm;
