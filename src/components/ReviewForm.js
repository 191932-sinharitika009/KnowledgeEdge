import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// Replace makeStyles with styled
const ReviewFormContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
}));

const ReviewForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to Firebase or API)
  };

  return (
    <ReviewFormContainer id='reviewForm' maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Leave a Review
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Your Name"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Your Review"
              name="review"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Submit Review
            </Button>
          </Grid>
        </Grid>
      </form>
    </ReviewFormContainer>
  );
};

export default ReviewForm;
