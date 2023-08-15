import React from 'react';
import '../../css/app.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function Login() {

    return (
        <div className="container card_container">
            <div className="row justify-content-center">
                <div className="col-4 min_width_300">
                    <div className="card">
                        <div className="card-header">
                            <h2 className='text-center'>Log In</h2>
                        </div>
                        <div className="card-body text-center">
                            <div className="container">
                                <input type="text"
                                    name="Mail"
                                    id="Mail"
                                    placeholder='E-mail address'
                                    className='form-control rounded'
                                />
                                <br />
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder='Password'
                                    className='form-control rounded'
                                />
                                <br />
                                <Link to="/profile">
                                    <Button
                                        type="button"
                                        className='btn-lg'
                                    >
                                        <b>Log in</b>
                                    </Button>
                                </Link>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <Link to="/signup">
                                <Button
                                    type="button"
                                    className='btn-lg btn-success'
                                >
                                    <b>Sign up</b>
                                </Button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;