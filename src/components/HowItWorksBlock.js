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
  content: 'Covid19 has wreaked havoc for the under served. India has had more deaths due to mishandling of the lockdown than Corona. We are connecting people in need to people who want to be helped.',
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
        <Typography variant="body2" className={classes.content}>{CONTENT.content}</Typography>
        <Spacer height={theme.spacing(1)} />
        <Button variant="outlined" className={classes.knowMoreBtn}>{CONTENT.btnText}</Button>
      </Box>
    );
  }
};

export default withStyles(styles, {withTheme: true})(HowItWorksBlock);