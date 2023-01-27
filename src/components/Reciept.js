import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import '../App.css'

function Reciept() {
  return (
    <div className='container bg-primary justify-content-center' id="receipt">
        <Form>
            <Row>
                <Row>
                    <Col>
                        <p>Name:</p>
                    </Col>
                    <Col>
                        <p>Orock Lawrence</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Phone Number:</p>
                    </Col>
                    <Col>
                        <p>+237 674958974</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Email:</p>
                    </Col>
                    <Col>
                        <p>lawrence@test.com</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Town:</p>
                    </Col>
                    <Col>
                        <p>Buea</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Address:</p>
                    </Col>
                    <Col>
                        <p>Soppo Street 4</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Test 1:</p>
                    </Col>
                    <Col>
                        <p>30,000 XAF</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Test 2:</p>
                    </Col>
                    <Col>
                        <p>30,000 XAF</p>
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <p>Test 3:</p>
                    </Col>
                    <Col>
                        <p>30,000 XAF</p>
                    </Col>
                </Row>
            </Row>
        </Form>
    </div>
  )
}

export default Reciept