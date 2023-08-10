import React from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup'
import Main from './Main'
import Footer from './Footer'

function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="/login" element={<Main />} />
                <Route path="/signup" element={<Signup />} />
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
