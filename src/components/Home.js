import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion, useAnimation } from 'framer-motion';
import { useSpring, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const controls = useAnimation();

  const springProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    onRest: () => controls.start({ scale: 1 }), // Scale up after fade-in
  });

  return (
    <animated.div
      id="home"
      className={classes.root}
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
          <Button variant="contained" color="secondary" className={classes.button}>
            Get Started
          </Button>
        </motion.div>
      </Container>
    </animated.div>
  );
};

export default Home;

