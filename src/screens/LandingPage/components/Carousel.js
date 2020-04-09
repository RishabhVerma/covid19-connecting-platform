import React from 'react';
import Slider from "react-slick";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles, Box, Typography, Fab } from '@material-ui/core';

import CarouselSlide1 from '../../../assets/img/carousel/slide1.jpg';
import CarouselSlide2 from '../../../assets/img/carousel/slide2.jpg';


const styles = theme => ({
  slideContainer: {
    width: '100%',
    height: 280,
    [theme.breakpoints.up('lg')]: {
      height: 420,
    },
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  },
  slideTextContainer: {
    [theme.breakpoints.up('lg')]: {
      width: '15%',
    },
    width: '60%',
    padding: theme.spacing(2)
  },
  slideText: {
    [theme.breakpoints.up('lg')]: {
      fontSize: 28,
    },
    fontSize: 20,
    color: '#ffffff'
  },
  slideNavBtnContainer: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(1),
  },
  slideNavBtn: {
    width: 40,
    height: 40,
    margin: theme.spacing(1)
  }
});

const SLIDES = [
  {
    "id": 1,
    "text": "Manika Didi sells fish at the market. Market is closed now and so is her income.",
    "img": CarouselSlide1,
  },
  {
    "id": 2,
    "text": "Roshni didi makes jhadus and sells it in Delhi. Her household runs on her everyday wage She has none now.",
    "img": CarouselSlide2
  }
];

class CarouselSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleLeftClick = () => {
    const { slideIndex } = this.state;
    if (slideIndex == 0) {
      this.slider.slickGoTo(SLIDES.length-1);
    } else {
      this.slider.slickGoTo(slideIndex-1);
    }
  }

  handleRightClick = () => {
    const { slideIndex } = this.state;
    if (slideIndex >= SLIDES.length-1) {
      this.slider.slickGoTo(0);
    } else {
      this.slider.slickGoTo(slideIndex+1);
    }
  }

  renderSlide(slide) {
    const { classes } = this.props;
    return (
      <Box key={slide.id}>
        <Box className={classes.slideContainer} style={{ backgroundImage: `url(${slide.img})` }}>
          <Box className={classes.slideTextContainer}>
            <Typography variant="body1" className={classes.slideText}>{slide.text}</Typography>
          </Box>
          <Box className={classes.slideNavBtnContainer} >
            <Fab onClick={this.handleLeftClick} className={classes.slideNavBtn}> <ChevronLeftIcon /> </Fab>
            <Fab onClick={this.handleRightClick} className={classes.slideNavBtn}> <ChevronRightIcon /> </Fab>
          </Box>
        </Box>
      </Box>
    );
  }

  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ slideIndex: next })
    };
    return (
      <Slider ref={slider => (this.slider = slider)} {...settings}>
        { SLIDES.map(slide => this.renderSlide(slide)) }
      </Slider>
    );
  }
};

export default withStyles(styles, { withTheme: true })(CarouselSlider);