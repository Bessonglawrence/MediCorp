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
    const [testTotal, setTestTotal] = useState(null);


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

    useEffect(() =>{
        if (data.bloodTest || data.boneTest || data.generalTest){
            setTestTotal(boneTest.price + bloodTest.price + generalTest.price)
        }
    },[data])


  return (
            <div>
                 { Object.keys(data).length > 0 ?
                            <div className='container justify-content-center' id="receipt">
                            <div className='pt-4'>
                                <div>
                                    <span style={{fontSize: 20, fontWeight: '600', marginBottom: 20}}>Print #: MD763764</span>
                                </div>
                                <table className="table table-striped mt-4">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Costumer Info</th>
                                    <th scope="col">Test</th>
                                    <th scope="col">Test Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{data.firstName} {data.lastName}</td>
                                        <td>{bloodTest ? bloodTest.name : "Not selected"}</td>
                                        <td>{bloodTest ? bloodTest.price : "-----"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone Number</th>
                                        <td>{data.number}</td>
                                        <td>{boneTest ? boneTest.name : "Not selected"}</td>
                                        <td>{boneTest ? boneTest.price : "-----"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Town</th>
                                        <td>{data.town}</td>
                                        <td>{generalTest ? generalTest.name : "Not Selected"}</td>
                                        <td>{generalTest ? generalTest.price : "-----"}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{data.email}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Test Total</th>
                                        <td></td>
                                        <td></td>
                                        <td ><strong>{testTotal} XAF</strong></td>
                                    </tr>
                                </tbody>
                                </table>
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