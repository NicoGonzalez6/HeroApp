import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGlobalContext } from "../Context";

const PublicRoute = ({ children }) => {
    const { isAuth } = useGlobalContext();

    return (
        <Route
            render={() => {
                return !isAuth ? children : <Redirect to="/"></Redirect>;
            }}
        ></Route>
    );
};

export default PublicRoute;
