import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  let user = useSelector((state) => state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    const result = user.find((user) => email === user.email && password === user.password);
    console.log('result', result)
    if(result){
      setError('로그인 성공!')
    } else {
      setError('이메일 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>로그인</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>이메일 주소</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              로그인
            </Button>
            <Nav.Link as={Link} to="/regist">
            <p>아이디가 없으신가요??</p>
          </Nav.Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;