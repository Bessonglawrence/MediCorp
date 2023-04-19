import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Select from 'react-select';
import logo from '../../Images/logo.png';

const Login = () => {
  return (
      <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">

                      <div className="text-center">
                        
                        <h4 className="mt-1 mb-5 pb-1" style={{fontStyle: 'italic'}}>LOGIN AS ADMIN</h4>
                      </div>

                      <Form>

                        <Form.Group as={Col} className="mb-4" controlId="validationCustomPhoneNumber">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                              required
                              type="email"
                              placeholder="E.g john@gmail.com"
                              name="email"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} className="mb-2" controlId="validationCustomPhoneNumber">
                          <Form.Label>password</Form.Label>
                          <Form.Control
                              required
                              type="password"
                              placeholder="*******"
                              name="password"
                          />
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>


                        <div className="text-center pt-1 mb-5 pb-1">
                            <Button variant="primary" size="lg" className='gradient-custom-2 pl-6 pr-6' onClick={() => alert('Button click')}>
                                Login
                            </Button>
                        </div>

                        {/* <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">Create new</button>
                        </div> */}

                      </Form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <img src={logo}
                    style={{width: 205, height: 120 }}alt="logo" />
                      <h4 className="mb-4">Our Services are more than just Tests</h4>
                      <p className="medium mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Login;
