import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const Profile = () => {

  
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Card>
            <Card.Header as="h5">내 프로필</Card.Header>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={4} className="text-center">
                  <Image
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    roundedCircle
                    style={{ width: '150px', height: '150px' }}
                  />
                </Col>
                <Col md={8}>
                  <h2>사용자 이름</h2>
                  <p>이메일 주소: user@example.com</p>
                  <p>전화번호: 123-456-7890</p>
                  {/* 다른 프로필 정보 추가 */}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;