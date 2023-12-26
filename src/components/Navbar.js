import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const MyNavbar = () => {
  const classes = useStyles();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Your Brand
          </Typography>
          <Button color="inherit" onClick={scrollToTop}>
            Home
          </Button>
          <ScrollLink
            to="teamSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color="inherit">About</Button>
          </ScrollLink>
          <ScrollLink
            to="aboutWork"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color="inherit">Services</Button>
          </ScrollLink>
          <ScrollLink
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Button color="inherit">Contact</Button>
          </ScrollLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MyNavbar;
