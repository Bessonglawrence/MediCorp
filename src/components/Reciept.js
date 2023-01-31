import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import '../App.css'

function Reciept({data}) {
  return (
    <div className='container justify-content-center' id="receipt">
        <div id='receipt-frame' className='pt-4'>
        <span>Print #: MD763764</span>
        <Form>
            <Row>
                <Row>
                    <Col>
                        <p>Name:</p>
                    </Col>
                    <Col>
                        <p>{`${data.firstName} ${data.lastName}`}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Phone Number:</p>
                    </Col>
                    <Col>
                        <p>{data.number}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Email:</p>
                    </Col>
                    <Col>
                        <p>{data.email}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Town:</p>
                    </Col>
                    <Col>
                        <p>{data.town}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Address:</p>
                    </Col>
                    <Col>
                        <p>{data.address}</p>
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
        <h6 style={{paddingTop: 15, paddingBottom: 15, color: 'bluevoilet', fontSize: 22, fontWeight: 'bold'}}> Click on either the <span>Pay Now</span> or <span>Pay Over Counter</span> Button if you are happy with your receipt</h6>
    </div>
  )
}

export default Reciept