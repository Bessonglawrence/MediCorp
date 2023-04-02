import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { Referees, BoneTest, UltraSound, XRay, CTScan, DopplerUltraSound, SpecialProcedures, Cardiology } from '../Data/Data';



function Reciept({ data }) {

    const [ctScanTests, setCTScanTests] = useState([])
    const [xRayTests, setXRayTests] = useState([]);
    const [dopplerUltraSounds, setDopplerUltraSounds] = useState([]);
    const [ultraSounds, setUltraSounds] = useState([]);
    const [specialProcedures, setSpecialProcedures] = useState([]);
    const [cardiologyTests, setCardiologyTests] = useState([]);
    const [testTotal, setTestTotal] = useState(0);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    useEffect(() => {
        if (data.xRayTests) {
            setXRayTests(data.xRayTests.map(inputTest => {
                return XRay.find(test => test.id === inputTest.value);
            }))
        }

        if (data.ctScanTests) {
            setCTScanTests(data.ctScanTests.map(inputTest => {
                return CTScan.find(test => test.id === inputTest.value)
            }))
        }

        if (data.ultraSounds) {
            setUltraSounds(data.ultraSounds.map(inputTest => {
                return UltraSound.find(test => test.id === inputTest.value)
            }))
        }

        if (data.dopplerUltraSounds) {
            setDopplerUltraSounds(data.dopplerUltraSounds.map(inputTest => {
                return DopplerUltraSound.find(test => test.id === inputTest.value)
            }))
        }

        if (data.specialProcedures) {
            setSpecialProcedures(data.specialProcedures.map(inputTest => {
                return SpecialProcedures.find(test => test.id === inputTest.value)
            }))
        }

        if (data.cardiologyTests) {
            setCardiologyTests(data.cardiologyTests.map(inputTest => {
                return Cardiology.find(test => test.id === inputTest.value)
            }))
        }


    }, [data])

    useEffect(() => {
        let computedTotal = 0;
        xRayTests.map(test => computedTotal += test.price);
        ctScanTests.map(test => computedTotal += test.price);
        ultraSounds.map(test => computedTotal += test.price);
        dopplerUltraSounds.map(test => computedTotal += test.price);
        specialProcedures.map(test => computedTotal += test.price);
        cardiologyTests.map(test => computedTotal += test.price);



        setTestTotal(computedTotal);

    }, [ctScanTests, ultraSounds, xRayTests, dopplerUltraSounds, specialProcedures, cardiologyTests])


    const handleComplete = async (event) => {

        setLoading(true);

        const name = data.name;
        const email = data.email;
        const number = data.number;
        const total = testTotal;
        const tests = {xRayTests, ultraSounds, ctScanTests, dopplerUltraSounds, specialProcedures, cardiologyTests};

        event.preventDefault();
        const invoice = { name, email, number, total, tests };
        console.log({invoice});
        console.log('JSONIFY', JSON.stringify(invoice));
        const response = await fetch('https://medicorpbackend-u5p7.onrender.com/api/invoice/', {
            method: "POST",
            body: JSON.stringify(invoice),
            headers: {
                'Content-Type': 'application/Json',
            },

        })

        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            alert(error)
            setLoading(false)
        }
        if (response.ok) {
            console.log("Invoice has been generated", json)
            setLoading(false)
            navigate('/completed')
        }
    }
    // console.log({bloodTests, ultraSounds, boneTests})
    return (
        <div className='br-4'>
            {Object.keys(data).length > 0 ?
                <div className='container ps-5 pe-5' id="receipt">
                    <div className='pt-4'>
                        <div className='text-center'>
                            <span style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>Print ID: #mdc6574346754</span>
                        </div>
                        <table className="table table-striped table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Costumer Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Phone Number</th>
                                    <td>{data.number}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Town</th>
                                    <td>{data.town}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{data.email}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className='text-center'>
                            <span style={{ fontSize: 20, fontWeight: '600', marginBottom: 20 }}>Tests requested</span>
                        </div>

                        <table className="table table-striped table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">Test name</th>
                                    <th scope="col">Test price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {xRayTests.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                {ctScanTests.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                {ultraSounds.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                {dopplerUltraSounds.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                 {specialProcedures.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                {cardiologyTests.map((test, key) => (
                                    <tr key={key}>
                                        <td>{test.name}</td>
                                        <td>{test.price}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <th scope="row">Test Total</th>
                                    <td ><strong>{testTotal} XAF</strong></td>
                                </tr>
                            </tbody>
                        </table>


                    </div>
                    <h6 style={{ paddingTop: 15, paddingBottom: 15, color: 'bluevoilet', fontSize: 22 }} className="d-flex justify-content-center" > Click on <span>Complete Booking</span> Button if you are happy with your receipt</h6>
                    <div className="d-flex justify-content-center pb-4">

                        {!loading
                            ?
                            <Button variant="primary" size="lg" onClick={handleComplete}>
                                Complete Booking
                            </Button>
                            :
                            <Spinner animation="border" variant="primary" />
                        }

                    </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default Reciept;