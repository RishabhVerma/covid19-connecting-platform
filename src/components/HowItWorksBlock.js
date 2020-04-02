import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles, Typography, Button } from '@material-ui/core';

import HelpOutlineIcon from '@material-ui/icons/Help';

import Spacer from './Spacer';

const styles = theme => ({
  container: {
    background: '#d14836',
    padding: theme.spacing(2),
  },
  headingContainer: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff'
  },
  headingText: {
    paddingLeft: theme.spacing(1),
  },
  headingIcon: {
    fontSize: 32,
  },
  content: {
    color: '#d8dbe2',
  },
  knowMoreBtn: {
    color: '#ffffff'
  }
});

const CONTENT = {
  heading: 'How it Works?',
  content: '',
  btnText: 'Know More',
}

class HowItWorksBlock extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Box className={classes.container}>
        <Box className={classes.headingContainer}>
          <HelpOutlineIcon />
          <Typography variant="h4" className={classes.headingText}>{CONTENT.heading}</Typography>
        </Box>
        <Spacer height={theme.spacing(1)} />
        <Typography variant="body2" className={classes.content}>{'COVID-19 has wreaked havoc for the under served in India. It has amplified their everyday struggles and has been a cause for casualties, even. The plight of the migrant workers are getting worse with increased shortage of ration. Virus scares are their second priority as they are struggling to stay alive. There were many requests to help and this portal connects people who want to donate funds or volunteer and a crowd-sourced list of people in need. Basically, you can reach out directly to the ones you will be helping.'}</Typography>
        <Spacer height={theme.spacing(1)} />
        <Button variant="outlined" className={classes.knowMoreBtn}>{CONTENT.btnText}</Button>
      </Box>
    );
  }
};

export default withStyles(styles, {withTheme: true})(HowItWorksBlock);