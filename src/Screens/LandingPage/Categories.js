import React from "react";

import { 
    makeStyles,
    Chip
 } from '@material-ui/core';

import FaceIcon from '@material-ui/icons/Face';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import HotelIcon from '@material-ui/icons/Hotel';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

 const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 10,
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    chip: {
        color: "#000",
        backgroundColor: "#fff",
        outlineColor: "#fff !important"
    },
    chipIcon: {
        color: "#F582A7"
    }
  }));


const Categories = () => {
    const {
        root,
        chip,
        chipIcon
    } = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
      
    return (
        <div className={root}>
        <Chip size="medium" className={chip} variant="outlined" outlinedPrimary icon={<RestaurantIcon className={chipIcon} />} label="Restaurants" component="a" href="#chip" clickable />
        <Chip size="medium" className={chip} variant="outlined" icon={<LocalGasStationIcon className={chipIcon} />} label="Gas Stations" component="a" href="#chip" clickable />
        <Chip size="medium" className={chip} variant="outlined" icon={<LocalGroceryStoreIcon className={chipIcon} />} label="Groceries" component="a" href="#chip" clickable />
        <Chip size="medium" className={chip} variant="outlined" icon={<HotelIcon className={chipIcon} />} label="Hotels" component="a" href="#chip" clickable />
        <Chip size="medium" className={chip} variant="outlined" icon={<LocalDiningIcon className={chipIcon} />} label="Biryani" component="a" href="#chip" clickable />
        <Chip size="medium" className={chip} variant="outlined" icon={<LocalCafeIcon className={chipIcon} />} label="Coffee" component="a" href="#chip" clickable />
        </div>
    )
}

export default Categories;