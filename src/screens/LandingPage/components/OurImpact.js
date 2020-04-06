import React from 'react';
import { Paper, withStyles, Typography, Box, Grid } from '@material-ui/core';

const styles = theme => ({
  container: {
    backgroundColor: '#e8e8e8de',
    padding: theme.spacing(2),
  },
  analyticContainer: {
    background: '#ffce00',
    display: 'flex',
    padding: theme.spacing(2),
    height: 80,
  },
  analyticNumberContainer: {
    width: 120,
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    "highlight": "6000+",
    "text1": "Families",
    "text2": "helped."
  },
  {
    "id": 2,
    "background": "#f7dd70",
    "highlight": "1lac+ kg",
    "text1": "atta, rice, oil, salt",
    "text2": " and masala delivered."
  },
  {
    "id": 3,
    "background": "#ffce00",
    "highlight": "5",
    "text1": "Operational in Delhi,",
    "text2": "Assam, Haryana, UP & MP"
  },
  {
    "id": 4,
    "background": "#f7dd70",
    "highlight": "100+",
    "text1": "Volunteers",
    "text2": "working on ground."
  },
];

class OurImpact extends React.Component {

  renderAnalytic(analytic) {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={12} lg={6} key={analytic.id}>
        <Box className={classes.analyticContainer} style={{ background: analytic.background }}>
          <Box className={classes.analyticNumberContainer}>
            <Typography variant="h5" component="h4" className={classes.analyticNumber}>{analytic.highlight}</Typography>
          </Box>
          <Box className={classes.analyticDescriptionContainer}>
            <Typography variant="body1">{analytic.text1}</Typography>
            <Typography variant="body1">{analytic.text2}</Typography>
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
        <Typography variant="h5" component="h2">{'IMPACT SO FAR'}</Typography>
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