import React, { Fragment, useState } from "react";
import {
    Menu,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Avatar,
    makeStyles,
    ListItemAvatar,
    Typography,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import StoreIcon from '@material-ui/icons/Store';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const styles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        "& input": {
            height: "0px",
            marginLeft: 30,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    down: {
        width: "16px",
        height: "9.5px",
        marginTop: "5px",
        cursor: "pointer",
    },
    icon: {
        minWidth: 35
    },
    align: {
        color: "#fff",
        backgroundColor: "#101010",
        width: 180,
        "& .MuiList-padding": {
            paddingTop: "0px !important",
            paddingBottom: "0px !important",
            borderRadius: 0
        }
    },
    accountButton: {
        paddingRight: "0px !important",
        cursor: "pointer"
    }
}));

function AccountMenu(props) {
    const classes = styles();
    const [anchorEl, setanchorEl] = useState(false);
    const { history, user } = props;

    const handleClose = () => {
        setanchorEl(null);
    };

    const handleClick = (event) => {
        setanchorEl(event.currentTarget);
    };

    const handleChangeRoute = (path) => {
        history.push(`/account/${path}`);
        handleClose();
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <Fragment>
            <List disablePadding className={classes.accountButton} onClick={handleClick}>
                <ListItem disableGutters disablePadding>
                    <ListItemAvatar>
                        <Avatar>
                            {/* {user?.name?.slice("")[0]}  */}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography style={{ textTransform: "capitalize" }}>{user?.name} </Typography>
                        }
                    />
                    <ListItemSecondaryAction>
                        <ExpandMoreIcon style={{ fontSize: 30, marginTop: 5 }} />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                classes={{ paper: classes.align }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List>
                    <ListItem button onClick={() => { handleChangeRoute("addresses") }} >
                        <ListItemIcon className={classes.icon} >
                            <LocationOnIcon style={{ color: "#FCBF10", marginLeft: -4 }}/>
                        </ListItemIcon>
                        <ListItemText primary="Addresses" />
                    </ListItem>
                    <ListItem button onClick={() => { handleChangeRoute("profile") }}>
                        <ListItemIcon className={classes.icon} >
                            <PersonIcon style={{ color: "#FCBF10", marginLeft: -4 }} />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon className={classes.icon} >
                            <ExitToAppIcon style={{ color: "#fcbf10", marginLeft: -4 }} />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Menu>
        </Fragment>
    );
}
export default AccountMenu;