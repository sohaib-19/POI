import React, { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  Typography,
  Dialog,
  AppBar,
  IconButton,
  Badge
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";

import cart from "../Assets/Icons/cart.png";

const styles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  listItem: {
    color: "#000",
    paddingTop: 15
  },
  DrawerList: {
  },
}));

const RenderMenu = (props) => {
  const [open, setopen] = useState(false);
  const classes = styles();

  const handleClickOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  const handleCHangeRoute = (path) => {
    props.history.push(path);
    handleClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <React.Fragment>
      <div>
        <IconButton edge="start" onClick={handleClickOpen} aria-label="close">
          <MenuIcon style={{ color: "#000", marginTop: 5 }} />
        </IconButton>
      </div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar
          className={classes.appBar}
          style={{
            backgroundColor: "#D1D1D1",
            fontFamily: '"Noto Sans KR", sans-serif',
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              onClick={() => handleCHangeRoute("/")}
              style={{
                alignItems: "center",
                verticalAlign: "middle",
                display: "inline-flex",
                height: 60,
                color: "#000",
                marginLeft: 22,
              }}
            >
              POI
            </Typography>
            <IconButton
              edge="start"
              color="black"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon style={{ color: "#000" }} />
            </IconButton>
          </div>
        </AppBar>
        <List
          style={{
            backgroundColor: "#fff",
            height: "inherit",
            paddingLeft: "5px",
          }}
        >
          <ListItem
            className={classes.listItem}
            onClick={() => {
              handleCHangeRoute("/");
            }}
          >
            Home
          </ListItem>
          <ListItem
            className={classes.listItem}
            onClick={() => {
              handleCHangeRoute("/restaurants");
            }}
          >
            Destinations
          </ListItem>
          {
            localStorage.getItem("token") &&
            <>
              <ListItem
                className={classes.listItem}
                onClick={() => (handleCHangeRoute("/account/addresses"))}
              >
                Address
              </ListItem>
              <ListItem
                className={classes.listItem}
                onClick={() => (handleCHangeRoute("/account/profile"))}
              >
                My  Profile
              </ListItem>
            </>
          }
          {
            !localStorage.getItem("token") ?
              <ListItem
                className={classes.listItem}
                onClick={() => {
                  handleCHangeRoute("/login");
                }}
              >
                Login
              </ListItem>
              :
              <ListItem
                className={classes.listItem}
                onClick={handleLogout}
              >
                Logout
              </ListItem>
          }

        </List>
      </Dialog>
    </React.Fragment>
  );
};

const MobileNav = (props) => {
  const classes = styles();

  const [token, setToken] = useState("");
  const { history, getCurrentUserData, user } = props;

//   useEffect(() => {
//     const tokenRedux = props?.user?.authToken;
//     const tokenStorage = localStorage.getItem("token");
//     if (tokenRedux) {
//       setToken(tokenRedux);
//     } else if (tokenStorage) {
//       setToken(tokenStorage);
//       if (Object.keys(user.data).length === 0) {
//         getCurrentUserData();
//       }
//     }
//   }, []);

  return (
    <AppBar
      position="fixed"
      className={classes.mobileAppBar}
      style={{
        backgroundColor: "#D1D1D1",
        fontFamily: '"Noto Sans KR", sans-serif',
      }}
    >
      <Container maxWidth="sm">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{
              alignItems: "center",
              verticalAlign: "middle",
              display: "inline-flex",
              height: 60,
              color: "#000",
              marginLeft: 10,
            }}
            onClick={() => { history.push("/") }}
          >
            POI
          </Typography>
          <RenderMenu {...props} />
        </div>
      </Container>
    </AppBar>
  );
};

export default MobileNav;
