import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Home from './Home'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar'
import Avatar from '@material-ui/core/Avatar';
import Picture from '../images/picture.jpg'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />

      <br />
      <Divider variant="middle"/>
      <br />

      <Grid container column alignItems="center" alignContent="center">

        <Grid item xs={0} md={1} />

        <Grid item xs={12} md={3} align="center">
          <Avatar alt="Timothy Yeo" src={Picture} className={classes.large} />
        </Grid>
        
        <Grid item xs={12} md={7} align="center">
          {/* <Paper elevation={3}> */}
            <Home />
          {/* </Paper> */}
        </Grid>
        
        <Grid item xs={0} md={1} />
        

      </Grid>
    </div>
  );
}
