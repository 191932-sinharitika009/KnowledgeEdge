import React from 'react';
import { Typography, Grid, Card, CardContent } from '@material-ui/core';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const worksData = [
  { title: 'Project 1', description: 'Description of Project 1.' },
  { title: 'Project 2', description: 'Description of Project 2.' },
  { title: 'Project 3', description: 'Description of Project 3.' },
  // Add more works as needed
];

const AboutWorks = () => {
  const classes = useStyles();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      id="aboutWork"
      className={classes.root}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h4" gutterBottom>
        Our Works
      </Typography>
      <Grid container spacing={3}>
        {worksData.map((work, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div variants={cardVariants} initial="hidden" animate="visible">
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" component="div">
                    {work.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {work.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default AboutWorks;
