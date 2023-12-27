import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Replace makeStyles with styled
const TeamSectionContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const TeamCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const TeamAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
}));

const TeamSection = () => {
  const teamMembers = [
    { name: 'Shubham Kumar', role: 'Founder', imageUrl: '/jane-smith.jpg' },
    { name: 'Milan Anand Raj', role: 'CEO', imageUrl: '/john-doe.jpg' },
    { name: 'Divya Gupta', role: 'R&D Scientist', imageUrl: '/jane-smith.jpg' },
    { name: 'Devansh Goyal', role: 'CTO', imageUrl: '/jane-smith.jpg' },
    // Add more team members as needed
  ];

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
      id="teamSection"
      as={TeamSectionContainer} // Use the styled container component
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Typography variant="h4" gutterBottom>
        Meet Our Team
      </Typography>
      <Grid container spacing={3}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div variants={cardVariants} initial="hidden" animate="visible">
              <TeamCard>
                <TeamAvatar alt={member.name} src={member.imageUrl} />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {member.role}
                  </Typography>
                </CardContent>
              </TeamCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default TeamSection;
