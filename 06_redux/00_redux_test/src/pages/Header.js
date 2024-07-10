import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const [info, setInfo] = useState(null);
  const myInfo = useSelector((state) => state.myInfo);

  // 컴포넌트가 처음 렌더링될 때 myInfo를 로컬 상태(info)에 설정
  useEffect(() => {
    setInfo(myInfo);
  }, [myInfo]); // myInfo가 변경될 때마다 useEffect가 실행됨

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className='m-3'>MyApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="ml-auto">
          <InputGroup>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </InputGroup>
        </Form>
        <Nav className="ml-auto">
          {info && info.username ? (
            <Nav.Link>{info.username} 님</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
          <Nav.Link as={Link} to="/profile">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="rounded-circle"
              style={{ width: '30px', height: '30px' }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;