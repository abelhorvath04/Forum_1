import React, { useState } from 'react';
import '../../css/app.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

function Signup() {

    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        if (form.checkValidity() === false || formData.password !== passwordConfirmation) {
            e.preventDefault();
            e.stopPropagation();

        } else {

            setValidated(true);

            try {
                const response = await axios.get('/csrf-token');
                const csrfToken = response.data.token;
                axios.post('/api/register', formData, {
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                    },
                })
                    .then(response => {
                        console.log(response.data.message);
                        window.location.replace('/email/verify');
                    })
                    .catch(error => {
                        console.error('Error submitting data:', error);
                    });
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
                setValidated(false);
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password_confirmation') {
            setPasswordConfirmation(value);
            setFormData({ ...formData, [name]: value });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    return (
        <div className="container card_container fade-in">
            <div className="row justify-content-center">
                <div className="col-4 min_width_300">
                    <div className="card">
                        <div className="card-header">
                            <h2 className='text-center'>Sign Up</h2>
                        </div>
                        <div className="card-body text-center">
                            <div className="container">
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validation_name"
                                            className="form-text-left"
                                        >
                                            <Form.Label >Username</Form.Label>
                                            <InputGroup hasValidation>
                                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    aria-describedby="inputGroupPrepend"
                                                    name="name"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please choose a username.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="valdation_mail"
                                            className="form-text-left"
                                        >
                                            <Form.Label>E-mail address</Form.Label>
                                            <InputGroup hasValidation>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="E-mail address"
                                                    aria-describedby="inputGroupPrepend"
                                                    name="email"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Please write your valid e-mail.
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validation_password"
                                            className="form-text-left"
                                        >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                                                onChange={handleChange}
                                                required />
                                            <Form.Control.Feedback type="invalid">
                                                Please write a stronger password.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validation_password_conf"
                                            className="form-text-left"
                                        >
                                            <Form.Label>Password again</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password_confirmation"
                                                value={passwordConfirmation}
                                                onChange={handleChange}
                                                required />
                                            <Form.Control.Feedback type="invalid">
                                                Please write an identical password.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <br />
                                    <Button type="submit" className='btn-lg'><b>Sign up</b></Button>
                                </Form>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <Link to="/login">
                                <input
                                    type="submit"
                                    value="Back to Log in"
                                    className="btn btn-secondary btn-lg fw-bold"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Signup;
