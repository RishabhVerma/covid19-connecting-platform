import React from 'react';
import { withStyles, AppBar, Box } from '@material-ui/core';

import IACLogo from '../../../assets/img/logo.png'

const styles = theme => ({
  appBar: {
    background: '#000000',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  logo: {
    width: 300,
    height: 25,
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="sticky" className={classes.appBar}>
        <Box className={classes.logoContainer}>
          <img src={IACLogo} className={classes.logo} />
        </Box>
      </AppBar>
    );
  }
};

export default withStyles(styles, { withTheme: true })(NavBar);