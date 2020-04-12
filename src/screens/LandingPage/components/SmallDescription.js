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
        <Typography variant="body1">There are thousands of Manika didis and Roshni didis around us today. They are suffering and we all know them – they are your household help, vegetable vendors, istri bhaiya or the innumerable migrant workers who are stranded kms away from their home since the lockdown has commenced.</Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(SmallDescription);