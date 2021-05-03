import React from 'react';
import { withStyles, Paper, Typography, Avatar, Box, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
    // backgroundColor: '#e8e8e8de',
  },
});

class Donate extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="caption">{'Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it is the only thing that ever has. - Margaret Mead'}</Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Donate)