import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const ReviewForm = () => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to Firebase or API)
  };

  return (
    <Container id='reviewForm' className={classes.root} maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Leave a Review
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              variant="outlined"
              required
              fullWidth
              label="Your Name"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
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
            <Button type="submit" variant="contained" className={classes.submitButton} fullWidth>
              Submit Review
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ReviewForm;
