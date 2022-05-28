import React, { Fragment, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import { useTheme, useMediaQuery } from "@material-ui/core";
import Navbar from "../Components/Navbar";
import MobileNav from "../Components/MobileNav";
import AboutUs from "../Screens/AboutUs/AboutUs";
import LandingPage from "../Screens/LandingPage/LandingPage"
import Routes from "../Routes/Routes";
// import Footer from "../Components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();

  const largeScreens = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Fragment>
          <>
            {largeScreens ? (
              <Navbar {...props}/>
            ) : (
              <MobileNav {...props} />
            )}
            <div style={{marginBottom: "100px"}}></div>
            {/* <LandingPage/> */}
            {/* <AboutUs/> */}

            <Routes />
            {/* <Footer /> */}
          </>
    </Fragment>
  );
}


export default withRouter(Layout);