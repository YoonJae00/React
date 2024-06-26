import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Content({searchText,setsearchText}) {

  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>검색하기</Card.Title>
          <Card.Text>
            <input type="text" onChange={ (e) => setsearchText(e.target.value) }/>
          </Card.Text>
          <Button variant="primary">전송</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Content;