import React from 'react';

import { Box, withStyles, Button, Typography, Paper, Container, Link } from '@material-ui/core';

const styles = theme => ({});

class ExplainerBlock extends React.Component {
  render() { 
    const { theme } = this.props;
    return (
      <Container maxWidth="lg" style={{ padding: 0, marginTop: 64 }}>
      <Paper elevation={0} style={{ padding: theme.spacing(2), backgroundColor: '#e8e8e8de' }}>
        <Typography variant="h4">{'A Community Initiative'}</Typography>
        <br />
        <Typography variant="body1">
          <strong>{'The plight of migrant workers is becoming more dire as shortage of rations increase. '}</strong>
          {'COVID-19 has wreaked havoc on the under privileged in India. It has exacerbated their everyday struggles – which is a deadly reality for many. Virus scares are their second priority, as many are struggling to stay alive.'}
        </Typography>
        <br />
        <Typography variant="body1">{'We are building a crowdsourced list of vulnerable families and individuals across 5 states –donate to help supply a family with 2-weeks of emergency rations and hygiene supplies. '}</Typography>
        <br />
        <Link href="https://www.payumoney.com/paybypayumoney/#/A9983228ABD06FC4F131181353738EAA">
          <Button variant="contained" color="primary" style={{backgroundColor: '#000', width: 300}}>Donate Now</Button>
        </Link>
      </Paper>
      </Container>
    );
  }
};

export default withStyles(styles, { withTheme: true })(ExplainerBlock);