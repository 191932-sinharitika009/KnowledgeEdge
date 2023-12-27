import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Use the styled function to define styles
const FooterContainer = styled('footer')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  marginTop: theme.spacing(4),
}));

const SocialIconsContainer = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const SocialLink = styled(Link)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  color: theme.palette.primary.contrastText,
}));

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <Container maxWidth="lg">
        <Typography variant="h6" gutterBottom>
          Knowledge Edge AI Consulting
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Providing innovative AI solutions for businesses.
        </Typography>
        <SocialIconsContainer container justifyContent="center">
          <SocialLink href="#">
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="#">
            <TwitterIcon />
          </SocialLink>
          <SocialLink href="#">
            <LinkedInIcon />
          </SocialLink>
        </SocialIconsContainer>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          &copy; {new Date().getFullYear()} Knowledge Edge AI Consulting. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
