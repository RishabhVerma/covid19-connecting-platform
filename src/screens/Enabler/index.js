import React from 'react';
import Typography from '@material-ui/core/Typography';

import HowItWorksBlock from '../../components/HowItWorksBlock'
import Spacer from '../../components/Spacer';
import { Box, withStyles } from '@material-ui/core';

const styles = theme =>  ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  contentContainer: {
    // maxWidth: 640,
  }
});


class EnablerLandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formWidth: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ formWidth: window.innerWidth - 32 });
  }
  
  render() {
    const { classes, theme } = this.props;
    let { formWidth } = this.state;
    if (formWidth === null) {
      formWidth = window.innerWidth - 32;
    }
    return (
      <>
        <HowItWorksBlock />
        <Box className={classes.container}>
          <Box className={classes.contentContainer}>
            <Spacer height={theme.spacing(2)} />
            <Typography variant="h3">HELP US, HELP THEM</Typography>
            <Spacer height={theme.spacing(1)} />
            <Typography variant="body1">{'We are all aware of the URGENT food crisis happening in India. We have on-ground helpers/volunteers who are reaching out to people in need and .... more content comes here'}</Typography>
            <Spacer height={theme.spacing(1)} />
            <Typography variant="body1">{'Do you know anyone who needs aid in form of food, clothes, or medicines because of the lockdown'}</Typography>
            <Spacer height={theme.spacing(2)} />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegJ0EA3L7XGNMhSBV3Erv00ypPkAgo3s3lljLLuaVVpKzb8Q/viewform?embedded=true" width={formWidth} height="2245" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </Box>
        </Box>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(EnablerLandingPage);