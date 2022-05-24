import React from 'react';
import { 
    makeStyles,
    IconButton,
    InputBase
 } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Categories from './Categories';

import Map from "../../Assets/map.webp"
import SearchIcon from '@material-ui/icons/Search';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  mapPaper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootSearch: {
    padding: "12px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#101010",
    borderRadius: "50px",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      marginLeft: "0%",
    },
  },
  input: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
  },
  iconButton: {
    padding: 10,
    color: '#fff !important'
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* <Grid container spacing={3}> */}

      <Grid container justify="center" spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper elevation={2} className={classes.rootSearch}>
              <IconButton className={classes.iconButton}
            //    onClick={restaurantSearch} 
               >
                <img alt="" src={LocalCafeIcon} />
              </IconButton>
              <InputBase
                // value={search}
                className={classes.input}
                placeholder="Search Point of Interest"
                // onChange={handleChange}
              />
            </Paper>
          </Grid>

          <Grid container justify="center" spacing={2}>

              <Categories/>
          </Grid>
        {/* </Grid> */}

        <Grid item xs={12}>
          <Paper className={classes.mapPaper}>
          <img alt="" style={{ width: "100%", height: "auto" }} src={Map} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Recommended for you</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Others</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
