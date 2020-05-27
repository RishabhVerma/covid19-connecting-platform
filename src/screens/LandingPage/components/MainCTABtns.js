import React from 'react';
import { Paper, withStyles, Typography, Button, Grid, Link, Box } from '@material-ui/core';

import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';


const styles = theme => ({
  container: {
    padding: theme.spacing(2),
  },
  ctaContainer: {
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row'
    },
  },
  CTAbtns: {
    width: '100%',
    backgroundColor: '#000',
  },
  formBtns: {
    width: '50%',
    backgroundColor: '#25852a'
  },
  ctaBtnContainer: {
    background: '#224f79',
    padding: theme.spacing(1),
    height: '120px',
  },
  typographyStyle: {
    // fontFamily:'Sniglet' ,
    fontWeight:'500', 
    fontSize:'30px',
    color: '#fff'
  },
  icon: {
    width: '40px',
    height: '40px',
    color: '#fff'
  }
});

class MainCTABtns extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={2} />

          <Grid item xs={12} md={12} lg={4}>
            <Link href="/gharKiAas">
              <Paper elevation={3} className={classes.ctaBtnContainer}>
                <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                  <DirectionsBusIcon className={classes.icon} />
                  <Typography className={classes.typographyStyle} variant="h5" component="h5">Ghar Ki Aas</Typography>
                  <Typography style={{color: '#fff', fontWeight: '500', fontStyle: 'Italic', fontSize: '16px'}} variant="p" component="p">Transportation for stranded workers</Typography>
                </Box>            
              </Paper>
            </Link>
          </Grid>
          
          <Grid item xs={12} md={12} lg={4}>
            <Link href="/mentalHealthSupport">
              <Paper elevation={3} className={classes.ctaBtnContainer}>
                <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                  <FavoriteIcon className={classes.icon} />
                  <Typography className={classes.typographyStyle} variant="h5" component="h5">Mental Health</Typography>
                  <Typography style={{color: '#fff', fontWeight: '500', fontStyle: 'Italic', fontSize: '16px'}} variant="p" component="p">Hotline support provided</Typography>
                </Box>            
              </Paper>
            </Link>
          </Grid>

          <Grid item lg={2} />

          <Grid item lg={2} />
          <Grid item xs={12} md={12} lg={4}>
            <Link href="/peopleInNeed">
              <Paper elevation={3} className={classes.ctaBtnContainer}>
                <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                  <AccountBalanceWalletIcon className={classes.icon} />
                  <Typography className={classes.typographyStyle} variant="h5" component="h5">{'Ration & Hygiene Relief'}</Typography>
                  <Typography style={{color: '#fff', fontWeight: '500', fontStyle: 'Italic', fontSize: '16px'}} variant="p" component="p">Kits packaged and distributed</Typography>
                </Box>            
              </Paper>
            </Link>
          </Grid>

          <Grid item xs={12} md={12} lg={4}>
            <Link href="/livelihoodSupport">
              <Paper elevation={3} className={classes.ctaBtnContainer}>
                <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                  <BusinessCenterIcon className={classes.icon} />
                  <Typography className={classes.typographyStyle} variant="h5" component="h5">Livelihood Support</Typography>
                  <Typography style={{color: '#fff', fontWeight: '500', fontStyle: 'Italic', fontSize: '16px'}} variant="p" component="p">Helping small business owners</Typography>
                </Box>            
              </Paper>
            </Link>
          </Grid>
          <Grid item lg={2} />
          
          <Grid item lg={12}>
            <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
              <Typography variant="body1" style={{ fontSize: '1rem' }}>
                {'Fill out the form below, letting us know of families and individuals in need in your community!'}
              </Typography>
              <Link href="/enablerLanding">
                <Button className={classes.formBtns} variant="contained" color="primary">{'KNOW SOMEONE WHO NEEDS HELP?'}</Button>
              </Link>
            </Box>
          </Grid>

        </Grid>
        <br />
        <Typography variant="body1">Interested in volunteering? Contact us to become an on-ground enabler, to package and deliver emergency kits to those in need! <strong>Call 9871192983.</strong></Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(MainCTABtns);