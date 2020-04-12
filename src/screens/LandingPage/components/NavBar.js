import React from 'react';
import { withStyles, AppBar, Box, Link } from '@material-ui/core';

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
      <AppBar position="fixed" className={classes.appBar}>
        <Box className={classes.logoContainer}>
          <Link href="/#">
            <img src={IACLogo} className={classes.logo} />
          </Link>
        </Box>
      </AppBar>
    );
  }
};

export default withStyles(styles, { withTheme: true })(NavBar);