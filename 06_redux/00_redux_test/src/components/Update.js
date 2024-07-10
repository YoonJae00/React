import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from "react";

function Update() {
    
    const dispatch = useDispatch();
    const user = useSelector(state => state.myInfo);
    console.log('user',user)
    const [changeInfo, setchangeInfo] = useState(null);
    console.log('changeInfo',changeInfo)

    const submitHandler = (e) => {
      e.preventDefault();
      const modifyUser = changeInfo;
      dispatch(updateUser(changeInfo))
    }
    return(
        <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <h2>회원정보 수정</h2>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>사용자 이름</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.username}
                    onChange={e => setchangeInfo({
                        ...changeInfo,
                        username : e.target.value
                    })}
                />
              </Form.Group>
  
              <Form.Group controlId="formBasicEmail">
                <Form.Label>이메일 주소</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={user.email}
                  onChange={e => setchangeInfo({
                    ...changeInfo,
                    email : e.target.value
                })}
                />
              </Form.Group>
  
              <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.password}
                  onChange={e => setchangeInfo({
                    ...changeInfo,
                    password : e.target.value
                })}
                />
              </Form.Group>
  
              <Button variant="primary" type="submit">
                정보수정
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )

}

export default Update;