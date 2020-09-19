import React, { useEffect } from 'react';
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
import Grow from "@material-ui/core/Grow"

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

  const [contentFade, setContentFade] = React.useState(false);
  const [navbarFade, setNavBarFade] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
        setContentFade(true)
      }, 2000);
    
      setTimeout(() => {
        setNavBarFade(true)
      }, 1000);
  }
    
  )

  return (
    <div className={classes.root}>
      
      <Grow
        in={navbarFade}
        style={{ transformOrigin: "bottom"}}
        {...(navbarFade ? { timeout: 1000 } : {})}
      >
        <Paper style={{backgroundColor: 'transparent'}}>
          <Navbar />
        </Paper>
      </Grow>

      <br />
      <Divider variant="middle"/>
      <br />

      <Grid container column alignItems="center" alignContent="center">

        <Grid item xs={0} md={1} />

        <Grid item xs={12} md={3} align="center">
          <Grow
            in={contentFade}
            style={{ transformOrigin: "bottom"}}
            {...(contentFade ? { timeout: 1000 } : {})}
          >
            <Paper style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
              <Avatar alt="Timothy Yeo" src={Picture} className={classes.large} />
            </ Paper>
          </ Grow>
        </Grid>
        
        <Grid item xs={12} md={7} align="center">
        <Grow
            in={contentFade}
            style={{ transformOrigin: "bottom"}}
            {...(contentFade ? { timeout: 1000 } : {})}
          >
          <Paper style={{backgroundColor: 'transparent', boxShadow: 'none'} }>
            <Home />
          </Paper>
          </Grow>

        </Grid>
        
        <Grid item xs={0} md={1} />
        

      </Grid>
    </div>
  );
}
