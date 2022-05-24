import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from '@material-ui/core/Badge';
import AccountMenu from "./AccountMenu";
import cart from "../Assets/Icons/cart.png";
// import logo from '../Assets/logo.png';

const styles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  btn: {
    backgroundColor: "#F582A7",
    color: "#fff",
    width: 120,
    height: 45,
    borderRadius: 50,
    margin: "2px 24px 0 24px",
    "&:hover": {
      backgroundColor: "#F582A7",
      color: "#fff",
    },
  },
  homeBtn: {
    backgroundColor: "#F582A7",
    color: "#000",
    width: 100,
    height: 40,
    borderRadius: 50,
    margin: "3px 2px 0px 2px",
    "&:hover": {
      backgroundColor: "#F582A7",
      color: "#000",
    },
  },
  iconButton: {
    marginTop: 3,
    backgroundColor: "transparent",
  },
  iconButtonHome: {
    marginTop: 3,
    backgroundColor: "#101010",
    "&:hover": {
      backgroundColor: "#101010",
    },
  },
  navList: {
    cursor: "pointer"
  }
}));

const Navbar = (props) => {
  // const [token, setToken] = useState("");
  const { history } = props;
  const { link, btn, homeBtn, navList, iconButton, iconButtonHome } = styles();
  const path = window.location.pathname;

  // useEffect(() => {
  //   const tokenRedux = props?.user?.authToken;
  //   const tokenStorage = localStorage.getItem("token");
  //   if (tokenRedux) {
  //     setToken(tokenRedux);
  //   } else if (tokenStorage) {
  //     setToken(tokenStorage);
  //     if (Object.keys(user.data).length === 0) {
  //       getCurrentUserData();
  //     }
  //   }
  //   // console.log("cart", user?.cart?.items.length)
  // }, []);

  return (
    <div>
      <AppBar className="transparent">
        <Container maxWidth="xl">
          <Toolbar>
            <div style={{ width: "100%" }}>
              <Typography
              variant = "h4"
              style={{ height: 0, cursor: "pointer", fontWeight: "bold" }} onClick={() => history.push("/")}>POI</Typography>
              <div className="navigations">
                <ul>
                  <li className= {navList} onClick={() => history.push("/aboutus")}>
                    <Typography className="navLinks underline">
                        Home
                    </Typography>
                  </li>
                  <li className= {navList} onClick={() => history.push("/")}>
                    <Typography className="navLinks underline">
                        Destinations
                    </Typography>
                  </li>
                  <li className= {navList} onClick={() => history.push("/")}>
                    <Typography className="navLinks underline">
                        Your Places
                    </Typography>
                  </li>
                  <li className= {navList} onClick={() => history.push("/")}>
                    <Typography className="navLinks underline">
                        Tips & Tricks
                    </Typography>
                  </li>
                  {localStorage.getItem("token") ? (
                    <li>
                      <AccountMenu {...props} />
                    </li>
                     ) : (
                    <li>
                      <Button
                        onClick={() => {
                          history.push("/login");
                        }}
                        className={homeBtn}
                      >
                        Login
                      </Button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
