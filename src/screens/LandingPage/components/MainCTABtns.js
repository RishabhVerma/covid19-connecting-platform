import React from 'react';
import { Paper, withStyles, Typography, Button } from '@material-ui/core';

import Spacer from '../../../components/Spacer';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
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
        <Typography variant="h5" component="h2">{'HELP US. HELP THEM.'}</Typography>
        <br />
        <Typography variant="body1">{'We are trying to mobilise funds to buy essentials like food and ration for them to stay alive. We are crowdsourcing a list of all requests, verifying it and connecting them to folks like YOU. '}</Typography>
        <br />
        <Typography variant="body1">{'Our on-ground volunteers try to make sure that they have access to food and verify people’s requests.'}</Typography>
        <br />
        <Button className={classes.CTAbtns} variant="contained" color="primary">{'KNOW SOMEONE WHO NEEDS FOOD?'}</Button>
        <Spacer height={theme.spacing(1)} />
        <Button className={classes.CTAbtns} variant="contained" color="primary">{'DO YOU WANT TO DONATE?'}</Button>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(MainCTABtns);