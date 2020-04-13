import React from 'react';
import { withStyles, Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    backgroundColor: '#e8e8e8de',
    padding: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
});

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" style={{ fontWeight: 600 }} component="h2">{'ABOUT US'}</Typography>
        <br />
        <Typography variant="body1">{'COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive.'}</Typography>
        <br />
        <Typography variant="body1">{"We are a group of volunteers who started as an informal whatsapp group and have now reached almost 150+ members. Our attempt is to urgently fill the food gap created due to the COVID crisis amongst the vulnerable sections of our society. Identifying people who need food and aid first, and then reaching out and serving them. Help us populate the list.  We're now also accepting the donations."}</Typography>
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(AboutUs);