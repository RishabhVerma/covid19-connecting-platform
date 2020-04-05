import React from 'react';
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    backgroundColor: '#e8e8e8de',
    padding: theme.spacing(2),
  }
});

class SmallDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="body1">{'There are thousands of Manika didis and Roshni didis. They are suffering and we all know them – they are your household help, vegetable vendors, istri bhaiya or the innumerable migrant workers who are stranded kms away from their home because of the unplanned lockdown. '}</Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(SmallDescription);