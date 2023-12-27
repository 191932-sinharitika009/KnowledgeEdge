import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// Replace makeStyles with styled
const MyNavbarContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const MyNavbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <MyNavbarContainer>
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
    </MyNavbarContainer>
  );
};

export default MyNavbar;
