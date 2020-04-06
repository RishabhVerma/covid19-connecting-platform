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
    "highlight": "6500+",
    "text1": "Families",
    "text2": "helped."
  },
  {
    "id": 2,
    "background": "#f7dd70",
    "highlight": "1lac kgs",
    "text1": "Ration including atta, rice",
    "text2": "delivered till date."
  },
  {
    "id": 3,
    "background": "#ffce00",
    "highlight": "3",
    "text1": "Working in 3 states.",
    "text2": "Delhi, Haryana, UP & MP"
  },
  {
    "id": 4,
    "background": "#f7dd70",
    "highlight": "150+",
    "text1": "Volunteers",
    "text2": "working on ground."
  },
];

class OurImpact extends React.Component {

  renderAnalytic(analytic) {
    const { classes } = this.props;
    return (
      <Grid item xs={12} md={12} lg={6}>
        <Box key={analytic.id} className={classes.analyticContainer} style={{ background: analytic.background }}>
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