import React from 'react';
import Login from "./Login";
import MainLeft from "./MainLeft";

export default function Main() {
    return (
        <div className='container mt-20 fade-in'>
            <div className="row text-center main-row">
                <div className="col align-self-center">
                    <MainLeft />
                </div>
                <div className="col">
                    <Login />
                </div>
            </div>
        </div>
    )
}

