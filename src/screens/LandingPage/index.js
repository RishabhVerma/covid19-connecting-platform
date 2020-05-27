import React from 'react';
import ReactGA from 'react-ga';
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

import CarouselSlide1 from '../../assets/img/carousel/slide1.jpg';
import CarouselSlide2 from '../../assets/img/carousel/slide2.jpg';

const SLIDES = [
  {
    "id": 1,
    "text": "Manika didi sells fish at the market. The market is closed now and so is her access to livelihood.",
    "img": CarouselSlide1,
    "bgPosition": 'center center',
  },
  {
    "id": 2,
    "text": "Roshni didi makes jhadus and sells it in Delhi. Her household runs on her everyday wage. She has none now.",
    "img": CarouselSlide2,
    "bgPosition": '10% 30%',
  }
];

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

  componentDidMount() {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <>
        <NavBar />
        <Carousel slides={SLIDES}/>
        <Container maxWidth="lg" style={{ padding: 0 }}>
          <SmallDescription />
          <MainCTABtns />
          <OurImpact />
          {/* <Donate /> */}
          <AboutUs />
          <MeetTheTeam />
          <Footer />
        </Container>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(LandingPage);