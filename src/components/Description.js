import { Typography } from "@material-ui/core";
import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
    fontFamily: 'Open Sans',
  },
});

export default function Description() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Typography paragraph>
        I'm currently a second year Computing (MEng) student at Imperial College London.
      </Typography>

      <Typography paragraph>
        From a young age, I've always enjoyed dabbling in tech and computers. 
        Throughout this time, I've programmed in multiple different languages including Java, Python, C, JavaScript and Haskell. 
        I enjoy web development and have experience in both front end as well as back end frameworks such as React and Flask.
        I've also dabbled in AI, and love reading about the impact AI will have on our futures, as it becomes ever prominent in our lives.
      </Typography>

      <Typography paragraph>
        In the near future, I have plans to explore mobile application development using technologies such as Flutter and React Native.
      </Typography>

      <Typography paragraph>
        Outside of computing, I enjoy playing table tennis, listening to music (I'm an IEM enthusiast!) and reading a good book from time to time.
      </Typography>

      <Typography paragraph>
        If you're a recruiter, here are the essential links:
      </Typography>
    </ThemeProvider>
    </>
  )
}