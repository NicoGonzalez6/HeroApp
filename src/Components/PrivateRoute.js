import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../Context";

const PrivateRoute = ({ children }) => {
    const { isAuth } = useGlobalContext();
    return (
        <Route
            render={() => {
                return isAuth ? children : <Redirect to="/login"></Redirect>;
            }}
        ></Route>
    );
};

export default PrivateRoute;
