import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup'
import Main from './Main'
import Footer from './Footer'
import EmailVerify from './EmailVerify'
import Profile from './Profile'

function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/login" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/email/verify" element={<EmailVerify />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
