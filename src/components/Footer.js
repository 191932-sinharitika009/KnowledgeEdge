import React from 'react';
import { Container, Typography, Link, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(4),
  },
  link: {
    margin: theme.spacing(0, 2),
    color: theme.palette.primary.contrastText,
  },
  socialIcons: {
    marginTop: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer id="footer" className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Knowledge Edge AI Consulting
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Providing innovative AI solutions for businesses.
        </Typography>
        <Grid container justifyContent="center" className={classes.socialIcons}>
          <Link href="#" className={classes.link}>
            <FacebookIcon />
          </Link>
          <Link href="#" className={classes.link}>
            <TwitterIcon />
          </Link>
          <Link href="#" className={classes.link}>
            <LinkedInIcon />
          </Link>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          &copy; {new Date().getFullYear()} Knowledge Edge AI Consulting. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
