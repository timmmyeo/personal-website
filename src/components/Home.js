import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Navlinks from './Navlinks'
import IconLinks from "./IconLinks"
import Description from "./Description"


export default function Home() {

  return (
    <>
        <Typography variant="h3" component="p" gutterBottom style={{fontFamily: 'Open Sans'}}>
          Hi There! I'm Tim.
        </Typography>


      <Grid container>
          
          {/* <Navlinks /> */}

          <Grid item xs={12}>
            <Description />
          </Grid>

          <Grid item xs={4} />

          <Grid item xs={12}>
            <IconLinks />
          </Grid>

          <Grid item xs={4} />

      </Grid>
    </>
  );
}