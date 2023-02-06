import React,{useEffect, useState} from 'react'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import '../App.css'
import { Referees, BloodTest, BoneTest,GeneralTest } from '../Data/Data';

function Reciept({data}) {


    const [bloodTest, setBloodTest] = useState(null);
    const [boneTest, setBoneTest] = useState(null);
    const [generalTest, setGeneralTest] = useState(null);


    useEffect(() =>{
        if(data.bloodTest){
            setBloodTest(BloodTest.find(test => test.id == data.bloodTest))
        }
        if(data.boneTest){
            setBoneTest(BoneTest.find(test =>test.id == data.boneTest))
        }
        if(data.generalTest){
            setGeneralTest(GeneralTest.find(test => test.id == data.generalTest))
        }
    },[data])

  return (
            <div>
                 { Object.keys(data).length > 0 ?
                            <div className='container justify-content-center' id="receipt">
                            <div id='receipt-frame' className='pt-4'>
                                <div>
                                    <span style={{fontSize: 18, fontWeight: '600'}}>Print #: MD763764</span>
                                    <span> Buea, SouthWest, Cameroon</span>
                                </div>
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
                                            <p>{bloodTest ? bloodTest.name : "Not selected"}</p>
                                        </Col>
                                        <Col>
                                            <p>{bloodTest ? bloodTest.price : "-----"}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>{boneTest ? boneTest.name : "Not selected"}</p>
                                        </Col>
                                        <Col>
                                            <p>{boneTest ? boneTest.price : "-----"}</p>
                                        </Col>
                                    </Row> 
                                    <Row>
                                        <Col>
                                            <p>{generalTest ? generalTest.name : "Not Selected"}</p>
                                        </Col>
                                        <Col>
                                            <p>{generalTest ? generalTest.price : "-----"}</p>
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