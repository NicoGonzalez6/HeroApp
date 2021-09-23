import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Error from "./Pages/Error";
import "./index.css";
import PublicRoute from "./Components/PublicRoute";
import PrivateRoute from "./Components/PrivateRoute";
import Singleheroe from "./Pages/Singleheroe";

const App = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path="/">
                    <Dashboard></Dashboard>
                </PrivateRoute>
                <PublicRoute path="/login">
                    <Login></Login>
                </PublicRoute>
                <Route path="/single/:id">
                    <Singleheroe></Singleheroe>
                </Route>
                <Route path="*">
                    <Error></Error>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
