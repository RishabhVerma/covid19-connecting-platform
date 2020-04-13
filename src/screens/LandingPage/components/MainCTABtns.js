import React from 'react';
import { Paper, withStyles, Typography, Button, Grid, Link, Box } from '@material-ui/core';

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
    backgroundColor: '#000000',
  }
});

class MainCTABtns extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2" style={{ fontWeight: 600 }}>{"WE'RE STRONGER TOGETHER"}</Typography>
        <br />
        <Typography variant="body1">{'Families of daily wage earners, who are domestic help, laborers, and so many others, are running out of supplies daily in the midst of the current crisis.'}</Typography>
        <br />
        <Typography variant="body1">{'IAC is stepping up to identify and locate vulnerable people to provide emergency rations and hygiene products – this is a community initiative to connect supplies with those in need! We are actively working in 4 states, Delhi NCR, Uttar Pradesh, Madhya Pradesh, Assam!'}</Typography>
        <br />
        <Typography variant="body1">{'Our initiative is unique because of our crowdsourced beneficiary list, you join the community effort, too You can help in two ways.'}</Typography> 
        <br />
        <Grid container spacing={2}>
          <Grid item lg={2} />
          <Grid item xs={12} md={12} lg={4}>
            <Link href="/enablerLanding">
              <Button className={classes.CTAbtns} variant="contained" color="primary">{'KNOW SOMEONE WHO NEEDS FOOD?'}</Button>
            </Link>
            <Box style={{ textAlign: 'center' }}>
              <Typography variant="body1" style={{ fontSize: '0.85rem' }}>
                {'Fill out the form below, letting us know of families and individuals in need in your community!'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Link href="/peopleInNeed">
              <Button className={classes.CTAbtns} variant="contained" color="primary">{'HAVE FUNDS TO SUPPORT?'}</Button>
            </Link>
            <Box style={{ textAlign: 'center' }}>
              <Typography variant="body1" style={{ fontSize: '0.85rem' }}>
                {'Donate directly to the link below, providing a 2-week supply of emergency food and hygiene products for a family of 4.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={2} />
        </Grid>
        <br />
        <Typography variant="body1">Interested in volunteering? Contact us to become an on-ground enabler, to package and deliver emergency kits to those in need! <strong>Call 899765210.</strong></Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(MainCTABtns);