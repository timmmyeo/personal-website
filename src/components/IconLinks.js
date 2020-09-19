import React from 'react';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CV from '../files/CV.pdf';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(0, 0, 0, 0)",
    '&:hover': {
       background: "rgba(160, 163, 253, 0.7)",
    },
  }
}));

export default function IconLinks() {
  const classes = useStyles();
  
  return (
    <>
      <Link href={CV}>
        <Tooltip title="CV">
          <IconButton color="primary" aria-label="CV" className={classes.root}>
            <DescriptionIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </ Link>

        <Link href="https://github.com/timmmyeo">
          <Tooltip title="GitHub">
            <IconButton color="primary" aria-label="GitHub" className={classes.root}>
              <GitHubIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
        </ Link>

        <Link href="https://www.linkedin.com/in/timothy-yeo-399326117/">  
          <Tooltip title="LinkedIn">
            <IconButton color="primary" aria-label="LinkedIn" className={classes.root}>
                <LinkedInIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </ Link>

        <Link href="mailto:timothyyeo121@gmail.com">  
          <Tooltip title="Email">
            <IconButton color="primary" aria-label="Email" className={classes.root}>
                <EmailIcon fontSize="large"/>
            </IconButton>
          </Tooltip>
        </ Link>
    </>
  )
}