import React from 'react';
import { withStyles, Paper, Typography, Avatar, Box, Button, Link } from '@material-ui/core';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
  },
});

class Donate extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2">{'YOU CAN DO MORE'}</Typography>
        <br />
        <Typography variant="body1">{'You can reach out directly to the people you will be helping or donate and we will make sure that it reaches them. We have helped about 400 families till now and over thousands await. All help in terms of money and labour is welcome and needed desperately.'}</Typography>
        <br />
        <Link href="https://www.payumoney.com/paybypayumoney/#/A9983228ABD06FC4F131181353738EAA">
          <Button variant="contained" color="primary" style={{ background: '#000' }}>{'DONATE NOW'}</Button>
        </Link>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(Donate)