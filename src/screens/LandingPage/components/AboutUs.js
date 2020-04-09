import React from 'react';
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    backgroundColor: '#e8e8e8de',
    padding: theme.spacing(2),
  },
});

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2">{'ABOUT US'}</Typography>
        <br />
        <Typography variant="body1">{'COVID-19 has wreaked havoc for the under served in India and has amplified their everyday struggles and has been a cause for casualties, even.'}</Typography>
        <br />
        <Typography variant="body1">{"We are a group of volunteers who started as an informal whatsapp group and have now reached almost 150+ members. Our attempt is to urgently fill the food gap created due to the COVID crisis amongst the vulnerable sections of our society. Identifying people who need food aid first, and then reaching out and serving them. Help us populate the list and we're also accepting donations."}</Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(AboutUs);