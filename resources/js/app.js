import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/Landing/Home";
import Login from "./Pages/Landing/Login";
import {CssBaseline} from "@mui/material";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./Pages/Landing/Layout";

function App() {
    return (
        <>
            <CssBaseline/>
            <BrowserRouter>
                <Switch>
                    <Layout>
                        <Route exact path="/" component={Home}/>
                    </Layout>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
