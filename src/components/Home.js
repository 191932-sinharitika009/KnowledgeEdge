import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

// Use the styled function to define styles
const HomeContainer = styled(animated.div)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Home = () => {
  const controls = useAnimation();

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    onRest: () => controls.start({ scale: 1 }), // Scale up after fade-in
  });

  return (
    <HomeContainer
      id="home"
      style={springProps}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Welcome to Knowledge Edge AI Consulting
        </Typography>
        <Typography variant="h5" paragraph>
          Empowering businesses through innovative AI solutions.
        </Typography>
        <motion.div
          animate={controls}
          initial={{ scale: 0 }} // Start with scale 0
          transition={{ duration: 0.5 }}
        >
          <StyledButton variant="contained" color="secondary">
            Get Started
          </StyledButton>
        </motion.div>
      </Container>
    </HomeContainer>
  );
};

export default Home;
