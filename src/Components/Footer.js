import React from 'react';

import {
    Grid,
    Typography,
    Container,
    Divider,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    makeStyles
} from "@material-ui/core";

import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
// import GoogleIcon from '@material-ui/icons/Google';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F582A7',
        marginTop: '30px',
        width: "100%"
    },
    logo: {
        width: '100%',
        height: 'auto',
        marginTop: -40,
        marginLeft: -40
    },
    heading: {
        marginTop: '40px',
        fontWeight: 'bold'
    },
    unorderedList: {
        listStyle: 'none',
        paddingLeft: '0px'
    },
    anchor: {
        textDecoration: 'none',
        color: '#646464',
        "&:hover": {
            color: '#7f1521'
        }
    },
    list: {
        padding: '3px',
        marginTop: '10px',
        color: 'black'
    },
    iconList: {
        padding: '3px',
        marginTop: '10px',
        display: 'inline',
    },
    button: {
        marginTop: 30,
        border: '1px solid black',
        width: '50%',
        justifyContent: 'center',
        height: 40,
        fontSize: '13px'
    },
    // customizeDiv: {
    //     [theme.breakpoints.up('md')]: {
    //         paddingLeft: '20px'
    //     },
    // }
    text: {
        color: "#fff !important",
        opacity: 0.8
    },
    footerTitle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    },
    footerChild: {
        padding: 15,
        [theme.breakpoints.down('md')]: {
            padding: 2,
        }
    }
}))

const Footer = () => {
    const {
        root,
        text,
        footerTitle,
        footerChild
    } = useStyles();
    return (
        <div className={root}>
            <div style={{ backgroundColor: '#222222', boxShadow: '0 -5px 5px -5px #333' }}>
                <Grid container>
                    <Grid item xs={12} md>
                        <div className={footerTitle}>
                            <h1 style={{ color: "#F582A7" }}>POI</h1>
                        </div>
                    </Grid>
                    <Grid item xs={12} md>
                        <div className={footerChild}>
                            {/* <img alt='pic' src={logo} className={logo} /> */}
                            <h3 style={{ color: "#fff" }}>Customer Service</h3>
                            <List>
                                <Link style={{ textDecoration: 'none' }} to="/help">
                                    <ListItem disablePadding>
                                        <ListItemText className={text}>Help</ListItemText>
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="/privacy-policies">
                                    <ListItem disablePadding>
                                        <ListItemText className={text}>Privacy Policies</ListItemText>
                                    </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="terms-conditions">
                                    <ListItem disablePadding>
                                        <ListItemText className={text}>Terms & Conditions</ListItemText>
                                    </ListItem>
                                </Link>
                            </List>

                        </div>
                    </Grid>
                    <Grid item xs={12} md>
                        <div className={footerChild}>
                            {/* <img alt='pic' src={logo} className={logo} /> */}
                            <h3 style={{ color: "#fff" }}>Account</h3>
                            <List>
                                <Link style={{ textDecoration: 'none' }} to="login">
                                <ListItem disablePadding>
                                    <ListItemText className={text}>Login</ListItemText>
                                </ListItem>
                                </Link>
                                <Link style={{ textDecoration: 'none' }} to="sign-up">
                                <ListItem disablePadding>
                                    <ListItemText className={text}>Sign Up</ListItemText>
                                </ListItem>
                                </Link>
                            </List>

                        </div>
                    </Grid>
                </Grid>
                <br />
            </div>
            <Divider />
            <div>
                <Container maxWidth='lg'>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
                        <p>Copyright © 2021 All rights reserved | POI</p>
                        <p>Developed By <a title="Iqra University" href='https://technest.dev' target="blank" style={{ textDecoration: 'none', color: '#000' }}><strong>Iqra University</strong></a></p>
                    </div>
                </Container>

            </div>
        </div>
    )
}

export default Footer;



// import React from 'react'
// import { Container, Typography, makeStyles } from "@material-ui/core";

// import CopyrightIcon from '@material-ui/icons/Copyright';

// const useStyle = makeStyles((theme) => ({
//     copyrightContainer: {
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginTop: 12,
//         marginBottom: 10,
//         width: "100%",
//         [theme.breakpoints.down('md')]: {
//             width: "100%",
//         }
//     },
//     privacy: {
//         color: '#F582A7',
//     },
//     copyRight: {
//         color: '#000',
//     },
//     copyrightMain: {
//         marginTop: 10,
//     }
// }))

// const Footer = () => {
//     const {
//         copyrightContainer,
//         privacy,
//         copyRight,
//         copyrightMain
//     } = useStyle();
//     return (
//         <Container maxWidth="xl" className={copyrightMain}>
//             <div className={copyrightContainer}>
//                 <div style={{display: 'flex'}}>
//                     <CopyrightIcon style={{color: 'white'}}/>
//                     <Typography className={copyRight} >
//                     Copyright POI. All Rights Reserved
//                     </Typography>
//                 </div>
//                 <div>
//                     <Typography className={privacy}>
//                         Privacy Policy
//                     </Typography>
//                 </div>
//             </div>
//         </Container>
//     )
// }

// export default Footer;
