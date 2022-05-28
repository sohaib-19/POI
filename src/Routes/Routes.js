import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import LandingPage from "../Screens/LandingPage/LandingPage";
import AboutUs from "../Screens/AboutUs/AboutUs";
import Login from "../Screens/Login/Login";
const routesArr = [
    {
        exact: true,
        path: "/",
        component: LandingPage,
    },
    {
        exact: true,
        path: "/aboutus",
        component: AboutUs,
    },
    {
        exact: true,
        path: "/login",
        component: Login,
    },

];

const routes = () => {
    return (
        <Switch>
            {routesArr.map((route) => {
                return (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        render={(props) => <route.component {...props} />}
                    />
                );
            })}
        </Switch>
    );
};

export default withRouter(routes);

