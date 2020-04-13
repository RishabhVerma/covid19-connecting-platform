import React from 'react';
import { Paper, withStyles, Typography, Box, Grid } from '@material-ui/core';

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
    fontWeight: 500,
  },
  analyticDescriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const ANALYTICS = [
  {
    "id": 1,
    "background": "#ffce00",
    "highlight": "10,000+",
    "text1": "Families helped.",
  },
  {
    "id": 2,
    "background": "#f7dd70",
    "highlight": "100,000+",
    "text1": "Ration and hygiene products delivered.",
  },
  {
    "id": 3,
    "background": "#ffce00",
    "highlight": "4",
    "text1": "Operational in Delhi, Assam, UP & MP",
  },
  {
    "id": 4,
    "background": "#f7dd70",
    "highlight": "100+",
    "text1": "Volunteers working on ground.",
  },
];

class OurImpact extends React.Component {

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

  render() {
    const { classes } = this.props;
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
      </>
    );
  }
};

export default withStyles(styles, { withTheme: true })(OurImpact);