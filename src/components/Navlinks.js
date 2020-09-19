/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function Navlinks() {
  const preventDefault = (event) => event.preventDefault();
  const bull = <span> • </span>;

  return (
    <>  
      <Grid container>
        <Grid item xs={4} />

        <Grid item xs={4}>
          <Typography variant="h4" align="center" >
              <Link href="#" onClick={preventDefault}>
                Home
              </Link>
              {bull}
              <Link href="#" onClick={preventDefault}>
                About
              </Link>
          </Typography>

        </ Grid>

        <Grid item xs={4} />
      </ Grid>
    </>
  );
}
