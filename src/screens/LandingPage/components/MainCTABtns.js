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
    backgroundColor: '#000',
  },
  formBtns: {
    width: '50%',
    backgroundColor: '#25852a'
  },
  ctaBtnContainer: {
    backgroundColor: '#e8e8e8de',
    padding: theme.spacing(1),
  },
});

class MainCTABtns extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Grid container spacing={3}>
          <Grid item lg={1} />
          <Grid item xs={12} md={12} lg={5}>
            <Paper elevation={0} className={classes.ctaBtnContainer}>
            <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
              <Typography variant="h5" component="h5">Transport Assistance</Typography>
              <Typography variant="body1" style={{ fontSize: '1rem', paddingTop: '10px'}}>
                {'Donate directly to the link below, helping stranded migrant workers reach home safely.'}
              </Typography>
            </Box>
            <Link href="/transportAssistance">
              <Button className={classes.CTAbtns} variant="contained" color="primary">
                {'DONATE NOW!'}
              </Button>
            </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <Paper elevation={0} className={classes.ctaBtnContainer}>
              <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                <Typography variant="h5" component="h5">Mental Health Services</Typography>
                <Typography variant="body1" style={{ fontSize: '1rem', paddingTop: '10px'}}>
                  {'**MENTAL HEALTH PAGE EXPLAINING BLOCK**'}
                  {'**MENTAL HEALTH PAGE EXPLAINING BLOCK**'}
                </Typography>
              </Box>
              <Link href="/livelihoodSupport">
                <Button className={classes.CTAbtns} variant="contained" color="primary">
                  {'DONATE NOW!'}
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item lg={1} />

          <Grid item lg={1} />
          <Grid item xs={12} md={12} lg={5}>
            <Paper elevation={0} className={classes.ctaBtnContainer}>
            <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
              <Typography variant="h5" component="h5">Ration Relief</Typography>
              <Typography variant="body1" style={{ fontSize: '1rem', paddingTop: '10px'}}>
                {'Donate directly to the link below, providing a 2-week supply of emergency food and hygiene products for a family of 4.'}
              </Typography>
            </Box>
            <Link href="/peopleInNeed">
              <Button className={classes.CTAbtns} variant="contained" color="primary">
                {'DONATE NOW!'}
              </Button>
            </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={5}>
            <Paper elevation={0} className={classes.ctaBtnContainer}>
              <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
                <Typography variant="h5" component="h5">Small Business Support</Typography>
                <Typography variant="body1" style={{ fontSize: '1rem', paddingTop: '10px'}}>
                  {'Donate directly to the link below, providing a livelihood to the daily wage earners for a month.'}
                </Typography>
              </Box>
              <Link href="/livelihoodSupport">
                <Button className={classes.CTAbtns} variant="contained" color="primary">
                  {'SUPPORT A LIVELIHOOD NOW!'}
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item lg={1} />
          
          <Grid item lg={12}>
            <Box style={{ textAlign: 'center', paddingBottom: theme.spacing(1) }}>
              <Typography variant="body1" style={{ fontSize: '1rem' }}>
                {'Fill out the form below, letting us know of families and individuals in need in your community!'}
              </Typography>
              <Link href="/enablerLanding">
                <Button className={classes.formBtns} variant="contained" color="primary">{'KNOW SOMEONE WHO NEEDS FOOD?'}</Button>
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