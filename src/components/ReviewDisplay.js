import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Replace makeStyles with styled
const ReviewDisplaysContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const ReviewCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(2),
}));

const ReviewCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const reviewsData = [
  { name: 'Client 1', review: 'We are extremely satisfied with Knowledge Edge AI Consulting. The team delivered excellent AI solutions for our business.' },
  { name: 'Client 2', review: 'The expertise and professionalism of the Knowledge Edge team have greatly contributed to the success of our AI projects.' },
  // Add more reviews as needed
];

const ReviewDisplays = () => {
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
      as={ReviewDisplaysContainer} // Use the styled container component
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h4" gutterBottom>
        What Our Clients Say
      </Typography>
      {reviewsData.map((review, index) => (
        <motion.div variants={cardVariants} initial="hidden" animate="visible" key={index}>
          <ReviewCard>
            <ReviewCardContent>
              <Typography variant="h6" component="div">
                {review.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {review.review}
              </Typography>
            </ReviewCardContent>
          </ReviewCard>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReviewDisplays;
