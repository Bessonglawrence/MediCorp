import React from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import '../App.css'

function Reciept({data}) {

  return (
            <div>
                 { Object.keys(data).length > 0 ?
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
                                            <div className='column'>
                                                <p>{data.firstName}</p>
                                                <p>{data.lastName}</p>
                                            </div>
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
                                            <p>Quarter:</p>
                                        </Col>
                                        <Col>
                                            <p>{data.quarter}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>{data.bloodTest}</p>
                                        </Col>
                                        <Col>
                                            <p>30,000 XAF</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>{data.boneTest}</p>
                                        </Col>
                                        <Col>
                                            <p>30,000 XAF</p>
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col>
                                            <p>{data.generalTest}</p>
                                        </Col>
                                        <Col>
                                            <p>30,000 XAF</p>
                                        </Col>
                                    </Row>
                                    <Row style={{marginBottom: 20}}>
                                        <Col>
                                            <strong>Total</strong>
                                        </Col>
                                        <Col>
                                            <strong>40,000 XAF</strong>
                                        </Col>
                                    </Row>
                                </Row>
                            </Form>
                            </div>
                            <h6 style={{paddingTop: 15, paddingBottom: 15, color: 'bluevoilet', fontSize: 22, fontWeight: 'bold'}}> Click on either the <span>Pay Now</span> or <span>Pay Over Counter</span> Button if you are happy with your receipt</h6>
                        </div>
                        :
                        null
                }
            </div>
  )
}

export default Reciept