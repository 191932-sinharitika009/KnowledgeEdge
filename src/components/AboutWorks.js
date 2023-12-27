import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Use the styled function to define styles
const AboutWorksContainer = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const WorksCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const WorksCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
}));

const worksData = [
  { title: 'Project 1', description: 'Description of Project 1.' },
  { title: 'Project 2', description: 'Description of Project 2.' },
  { title: 'Project 3', description: 'Description of Project 3.' },
  // Add more works as needed
];

const AboutWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AboutWorksContainer
      id="aboutWork"
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
              <WorksCard>
                <WorksCardContent>
                  <Typography variant="h6" component="div">
                    {work.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {work.description}
                  </Typography>
                </WorksCardContent>
              </WorksCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </AboutWorksContainer>
  );
};

export default AboutWorks;
