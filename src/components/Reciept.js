import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css'
import { Referees, BloodTest, BoneTest,GeneralTest } from '../Data/Data';

function Reciept({data}) {

    const handleCompleted = (event) =>{
        event.preventDefault();
        // setTimeout(() =>{
        //     setComplete(true);
        //     setInputs({})
        // }, 5000);
        alert('Button has been pressed')
    }
    
    const [bloodTest, setBloodTest] = useState(null);
    const [boneTest, setBoneTest] = useState(null);
    const [generalTest, setGeneralTest] = useState(null);
    const [testTotal, setTestTotal] = useState(0);


    const printID = () =>{
        const characters = '1234567890ABCDEFGHIJLMNOP';
        const length = characters.length;

        return characters.charAt(Math.random(Math.floor) * length);
    }

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

    useEffect(()=>{
        if(boneTest && generalTest && bloodTest){
            setTestTotal(boneTest.price + generalTest.price + bloodTest.price)
        } else if(boneTest && generalTest){
            setTestTotal(boneTest.price + generalTest.price)
        } else if(boneTest && bloodTest){
            setTestTotal(bloodTest.price + boneTest.price)
        } else if(generalTest && bloodTest){
            setTestTotal(generalTest.price + bloodTest.price)
        } else if(boneTest){
            setTestTotal(boneTest.price)
        } else if(generalTest){
            setTestTotal(generalTest.price)
        } else if(bloodTest){
            setTestTotal(bloodTest.price)
        }
    },[boneTest,generalTest,bloodTest])


  return (
            <div className='br-4'>
                 { Object.keys(data).length > 0 ?
                            <div className='container justify-content-center' id="receipt">
                            <div className='pt-4'>
                                <div>
                                    <span style={{fontSize: 20, fontWeight: '600', marginBottom: 20}}>Print ID: MD{printID()}</span>
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
                                        <td>{data.name}</td>
                                        <td>{bloodTest ? bloodTest.name : "Not selected"}</td>
                                        <td>{bloodTest ? bloodTest.price : "-----"} XAF</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone Number</th>
                                        <td>{data.number}</td>
                                        <td>{boneTest ? boneTest.name : "Not selected"}</td>
                                        <td>{boneTest ? boneTest.price : "-----"} XAF</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Town</th>
                                        <td>{data.town}</td>
                                        <td>{generalTest ? generalTest.name : "Not Selected"}</td>
                                        <td>{generalTest ? generalTest.price : "-----"} XAF</td>
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
                            <h6 style={{paddingTop: 15, paddingBottom: 15, color: 'bluevoilet', fontSize: 22}}> Click on either the <span>Complete Booking</span> Button if you are happy with your receipt</h6>
                            <div className="d-flex justify-content-center pb-4">
                                <Button variant="primary" size="lg" onClick={handleCompleted}>
                                    Complete Booking
                                </Button>
                            </div>
                        </div>
                        :
                        null
                }
            </div>
  )
}

export default Reciept