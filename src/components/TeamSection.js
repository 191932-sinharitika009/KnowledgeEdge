import React from 'react';
import { Typography, Grid, Card, CardContent, Avatar } from '@material-ui/core';
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
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
}));

const teamMembers = [
  { name: 'Milan Anand Raj', role: 'AI Specialist', imageUrl: '/john-doe.jpg' },
  { name: 'Divya Gupta', role: 'Data Scientist', imageUrl: '/jane-smith.jpg' },
  // Add more team members as needed
];

const TeamSection = () => {
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
      id="teamSection"
      className={classes.root}
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
              <Card className={classes.card}>
                <Avatar alt={member.name} src={member.imageUrl} className={classes.avatar} />
                <CardContent>
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {member.role}
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

export default TeamSection;

