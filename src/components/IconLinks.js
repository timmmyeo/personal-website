import React from 'react';
import Link from '@material-ui/core/Link';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CV from '../files/CV.pdf';


export default function IconLinks() {
  return (
    <>
      <Link href={CV}>
        <IconButton color="primary" aria-label="CV" >
          <DescriptionIcon />
        </IconButton>
      </ Link>
        <Link href="https://github.com/timmmyeo">
          <IconButton color="primary" aria-label="GitHub">
            <GitHubIcon />
          </IconButton>
        </ Link>
        <Link href="https://www.linkedin.com/in/timothy-yeo-399326117/">  
          <IconButton color="primary" aria-label="LinkedIn">
              <LinkedInIcon />
          </IconButton>
        </ Link>
        <Link href="mailto:timothyyeo121@gmail.com">  
          <IconButton color="primary" aria-label="Email">
              <EmailIcon />
          </IconButton>
        </ Link>
    </>
  )
}