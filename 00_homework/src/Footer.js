import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap'

function Footer() {

      return (
        // <div id="main-footer" className="text-center p-2"> 
        // m-auto 왼쪽오른쪽 여백 알아서 맞춰라. m : margin
        <div id="main-footer" className="text-center p-2"> 
            <Row>
                <Col>
                    <p>
                        Copyright &copy; <span>{new Date().getFullYear()}</span>
                    </p>
                   
                </Col>
            </Row>
        </div>
    );
}

export default Footer;