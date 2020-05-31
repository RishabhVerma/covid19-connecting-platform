import React from 'react';
import Slider from "react-slick";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Paper, withStyles, Typography, Box, Grid, Fab } from '@material-ui/core';

import SlideImg1 from '../../../assets/img/impact/img1.jpg';
import SlideImg2 from '../../../assets/img/impact/img2.jpg';
import SlideImg3 from '../../../assets/img/impact/img3.jpg';
import SlideImg4 from '../../../assets/img/impact/img4.jpg';
import SlideImg5 from '../../../assets/img/impact/img5.jpg';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
  },
  analyticContainer: {
    background: '#ffce00',
    display: 'flex',
    padding: theme.spacing(1),
    height: 80,
  },
  analyticNumberContainer: {
    width: 130,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center'
    }
  },
  analyticNumber: {
    fontWeight: 600,
    padding: '0 20px'
  },
  analyticDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  slideNavBtnContainer: {
    position: 'absolute',
    bottom: theme.spacing(6),
    right: theme.spacing(1),
  },
  slideNavBtn: {
    width: 40,
    height: 40,
    margin: theme.spacing(1)
  }
});

const ANALYTICS = [
  {
    "id": 1,
    "background": "#ffce00",
    "highlight": "16,000+",
    "text1": "Families helped.",
  },
  {
    "id": 2,
    "background": "#f7dd70",
    "highlight": "1,792,000",
    "text1": "Meals worth of ration delivered.",
  },
  {
    "id": 3,
    "background": "#ffce00",
    "highlight": "16",
    "text1": "Districts across Delhi, Assam, UP & MP",
  },
  {
    "id": 4,
    "background": "#f7dd70",
    "highlight": "100+",
    "text1": "Volunteers working on ground.",
  },
];

const IMAGES = [
  {
    "id": 1,
    "img": SlideImg1,
    "caption": "Delivery team in Barakund Village, Satpura Forest, Madhya Pradesh distributing rations to over 100 families."
  },
  {
    "id": 2,
    "img": SlideImg2,
    "caption": "One of many rounds of prepared emergency ration packages ready for delivery!",
  },
  {
    "id": 3,
    "img": SlideImg3,
    "caption": "Suresh, an on ground enabler, delivering rations in Dwarka, New Delhi."
  },
  {
    "id": 4,
    "img": SlideImg4,
    "caption": "Laxmi delivering emergency rations to neighbors in her village (Satpura Forest, Madhya Pradesh)"
  },
  {
    "id": 5,
    "img": SlideImg5,
    "caption": "Pramila working to provide rations in a Korku tribal village (Satpura Forest, Madhya Pradesh).",
  }
]

class OurImpact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleLeftClick = () => {
    const { slideIndex } = this.state;
    if (slideIndex == 0) {
      this.slider.slickGoTo(IMAGES.length-1);
    } else {
      this.slider.slickGoTo(slideIndex-1);
    }
  }

  handleRightClick = () => {
    const { slideIndex } = this.state;
    if (slideIndex >= IMAGES.length-1) {
      this.slider.slickGoTo(0);
    } else {
      this.slider.slickGoTo(slideIndex+1);
    }
  }

  renderAnalytic(analytic) {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={6} lg={3} key={analytic.id}>
        <Box className={classes.analyticContainer} style={{ background: analytic.background }}>
          <Box className={classes.analyticNumberContainer}>
            <Typography variant="h5" component="h4" className={classes.analyticNumber}>{analytic.highlight}</Typography>
          </Box>
          <Box className={classes.analyticDescriptionContainer}>
            <Typography variant="body1">
              {analytic.text1}
            </Typography>
          </Box>
        </Box>
      </Grid>
    );
  }

  renderSlideImage(img) {
    const { theme, classes } = this.props;
    return (
      <Box key={img.id}>
        <Box style={{
        width: '100%',
        height: 400,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundImage: `url(${img.img})`,
        justifyContent: 'flex-end',
        padding: 8,
        backgroundPosition: 'center',
      }}>
        <Box>
          <Typography style={{ color: '#fff' }} variant="body1">{img.caption}</Typography>
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
    const { classes } = this.props;
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
      <>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2" style={{ fontWeight: 600 }}>{'IMPACT SO FAR'}</Typography>
      </Paper>
      <Paper elevation={0}>
        <Grid container spacing={0}>
          { ANALYTICS.map(analytic => this.renderAnalytic(analytic)) }
        </Grid>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{padding: 0}}>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {IMAGES.map(img => this.renderSlideImage(img))}
        </Slider>
      </Paper>
      </>
    );
  }
};

export default withStyles(styles, { withTheme: true })(OurImpact);