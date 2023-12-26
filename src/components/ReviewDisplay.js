import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const reviewsData = [
  { name: 'Client 1', review: 'We are extremely satisfied with Knowledge Edge AI Consulting. The team delivered excellent AI solutions for our business.' },
  { name: 'Client 2', review: 'The expertise and professionalism of the Knowledge Edge team have greatly contributed to the success of our AI projects.' },
  // Add more reviews as needed
];

const ReviewDisplays = () => {
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
      id="reviewDisplay"
      className={classes.root}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h4" gutterBottom>
        What Our Clients Say
      </Typography>
      {reviewsData.map((review, index) => (
        <motion.div variants={cardVariants} initial="hidden" animate="visible" key={index}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h6" component="div">
                {review.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {review.review}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewDisplays;
