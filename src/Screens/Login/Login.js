import React, {useState} from "react";
import "../../App.css"
import { makeStyles, Grid, Container, TextField, Button } from "@material-ui/core";

import image from "../../Assets/loginMap.jpg"


const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        overflow: "hidden",
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    loginRightSide: {
        minHeight: "100vh",
        position: "relative",
        direction: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    rightSide: {
        margin: "auto",
        width: "60%",
        padding: "0px",
        position: "absolute",
        top: "27%",
        left: "25%",
    },
    textFields: {
        marginTop: 10,
        width: "100%",
    },

    focused: {
        "& $notchedOutline": {
            borderColor: "#0095FF !important",
        },
    },
    loginLeftSide: {
        position: "relative",
        textAlign: "center",
        color: 'white',
        width: "100%",
        height: "100%",
    },
    leftSide: {
        position: "absolute",
        top: "27%",
        width: "100%",
        textAlign: "left",
        margin: "0 10px",
    },
    heading: {
        color: "black",
        fontSize: 42,
        fontWeight: 600,
        padding: "0 30px",
    },
    para: {
        color: "black",
        fontSize: 18,
        textAlign: "left",
        width: "80%",
        padding: "0px 30px",
    },
    gridLeft: {
        backgroundImage: `url(${image})`,
        direction: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    heading2: {
        fontWeight: 'bold',
        fontSize: 26
    },
    button: {
        color: "white",
        textTransform: "capitalize",
        backgroundColor: "#F582A7",
        width: "100%",
        marginTop: 20,
    },
}))
const Login = () => {
    const {
        root,
        loginRightSide,
        loginLeftSide,
        leftSide,
        rightSide,
        textFields,
        heading,
        para,
        gridLeft,
        heading2,
        button,
    } = useStyles();

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <>
            <Container className={root} maxWidth="xl">
                <Grid container spacing={0}>
                    <Grid xs={12} md={7} item className={gridLeft}>
                        <div className={loginLeftSide}>
                            <div className={leftSide}>
                                <h2 className={heading}>
                                    Point Of Interest
                                </h2>
                                <p className={para}>
                                    We intend to be a preeminent academic research and teaching
                                    institution, which is recognized as a world leader in
                                    training of scholars, and for research in frontier fields of
                                    science and technology.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={5} className={loginRightSide}>
                        <div className={rightSide}>
                            <img src="" alt="" />
                            <h3 className={heading2}>Point Of Interest</h3>
                            <p style={{ color: "blue" }}>Sign in to Point Of Interest</p>
                            <TextField
                                className={textFields}
                                label="Enter Email"
                                variant="outlined"
                                type="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <TextField
                                className={textFields}
                                label="Enter Password"
                                variant="outlined"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                // onKeyPress={e => { this.handleEnter(e) }}
                            />
                            <Button
                                variant="contained"
                                className={button}
                                size="large"
                            >
                                Login
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Login;