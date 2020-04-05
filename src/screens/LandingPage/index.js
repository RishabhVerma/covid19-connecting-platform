import React from 'react';
import Div100vh from 'react-div-100vh'
import { Typography, Box, withStyles, Container, Button, Link } from '@material-ui/core';

import Spacer from '../../components/Spacer';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import SmallDescription from './components/SmallDescription';
import MainCTABtns from './components/MainCTABtns';
import OurImpact from './components/OurImpact';
import AboutUs from './components/AboutUs';
import MeetTheTeam from './components/MeetTheTeam';
import Donate from './components/Donate';
import Footer from './components/Footer'


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
  },
});

export class LandingPage extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <>
        <NavBar />
        <Carousel />
        <SmallDescription />
        <MainCTABtns />
        <OurImpact />
        <AboutUs />
        <MeetTheTeam />
        <Donate />
        <Footer />
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(LandingPage);