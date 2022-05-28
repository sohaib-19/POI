import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import LandingPage from "../Screens/LandingPage/LandingPage";
import AboutUs from "../Screens/AboutUs/AboutUs"
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
    // {
    //     exact: true,
    //     path: "/home",
    //     component: LandingPage,
    // },
    // {
    //     exact: true,
    //     path: "/destination",
    //     component: LandingPage,
    // },
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

