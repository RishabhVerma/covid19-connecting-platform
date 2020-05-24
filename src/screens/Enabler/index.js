import React from 'react';
import ReactGA from 'react-ga';
import Typography from '@material-ui/core/Typography';

import HowItWorksBlock from '../../components/HowItWorksBlock'
import Spacer from '../../components/Spacer';
import { Box, withStyles, Button, Container, Paper } from '@material-ui/core';
import NavBar from '../LandingPage/components/NavBar';
import ExplainerBlock from '../../components/ExplainerBlock';

const styles = theme =>  ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
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
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
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
        <NavBar />
        <ExplainerBlock />
        <Container maxWidth="lg" style={{ padding: 0 }}>
        <Box className={classes.container}>
            <Spacer height={theme.spacing(2)} />
            <Typography variant="body1">{'Fill out the form below, letting us know if you or someone you know needs support. We are currently only operating in 4 states - Delhi, UP, MP & Assam.'}</Typography>
            <br />
            <iframe frameBorder="0" width={formWidth} style={{height:1000, width: '100%', border:'none'}} src='https://forms.zohopublic.com/r16/form/Covid19/formperma/auewDSXzVKv_zf2OWR6yK9YDLOrnRVZZ5o89sZuEHLw'></iframe>
        </Box>
        </Container>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(EnablerLandingPage);