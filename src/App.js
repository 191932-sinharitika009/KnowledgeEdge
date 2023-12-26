import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import {ThemeProvider, createTheme } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import TeamSection from './components/TeamSection';
import ReviewForm from './components/ReviewForm';
import Contacts from './components/Contacts';
import ReviewsDisplay from './components/ReviewDisplay';
import AboutWorks from './components/AboutWorks';
import Footer from './components/Footer';


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5', 
//       contrastText: '#fff',
//     },
//     secondary: {
//       main: '#f50057', 
//     },
//     background: {
//       default: '#3f51b5', 
//     },
//   },
// });

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Container>
      <NavbarComponent />
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
        </Col>
      </Row>

      <TeamSection/>
      <AboutWorks/>
      <ReviewsDisplay/>
      <ReviewForm/>
      <Contacts/>
      <Footer/>
    </Container>
    // </ThemeProvider>
  );
};

export default App;
