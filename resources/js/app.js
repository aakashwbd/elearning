import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/Landing/Home";
import Login from "./Pages/Landing/Login";
import {CssBaseline} from "@mui/material";

function App() {
    return (
        <>
            <CssBaseline/>
            <Login/>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
