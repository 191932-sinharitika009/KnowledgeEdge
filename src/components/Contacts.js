import React from 'react';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// Use the styled function to define styles
const ContactsContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default,
  textAlign: 'center'
}));

const ContactsForm = styled('form')(({ theme }) => ({
  width: '100%',
  maxWidth: '400px',
  margin: 'auto',
}));

const ContactsTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ContactsSubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <ContactsContainer id="contacts" maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <ContactsForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ContactsTextField
              variant="outlined"
              required
              fullWidth
              label="Your Name"
              name="name"
            />
          </Grid>
          <Grid item xs={12}>
            <ContactsTextField
              variant="outlined"
              required
              fullWidth
              label="Your Email"
              name="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <ContactsTextField
              variant="outlined"
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <ContactsSubmitButton type="submit" variant="contained" fullWidth>
              Submit
            </ContactsSubmitButton>
          </Grid>
        </Grid>
      </ContactsForm>
    </ContactsContainer>
  );
};

export default Contacts;
