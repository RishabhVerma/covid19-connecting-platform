import React from 'react';

import { Box, withStyles, Button, Typography, Paper, Container, Link, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Modal } from 'antd'
import 'antd/dist/antd.css'

const styles = theme => ({
  textContainer: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(2),
    }
  }
});

class ExplainerBlock extends React.Component {
  constructor(){
    super()
    this.state = {
      visible : false,
    }
  }

  showModal = () => {
    this.setState({
      visible : true
    })
  }

  handleOk = () => {
    console.log("Clicked again")
    this.setState({
      visible : false,
    })
  }

  handleCancel = () => {
    this.setState({
      visible : false
    })
  }

  render() { 
    const { theme, classes } = this.props;
    return (
      <Container maxWidth="lg" style={{ padding: 0, marginTop: 64 }}>
      <Paper elevation={0} style={{ padding: theme.spacing(4), backgroundColor: '#e8e8e8de' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button 
                size="large" 
                variant="contained" 
                color="primary" 
                style={{ backgroundColor: '#000', width: '100%' }}
                onClick={this.showModal}
              >
                  Donate Now
              </Button>
              <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
              >
              </Modal>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box className={classes.textContainer}>
              <Typography variant="h5" align="center" style={{ fontWeight: 500 }}>{'600INR provides a family with 2 week supply of food & essentials.'}</Typography>
              <br />
              <Typography variant="body1" align="center" style={{ fontSize: '1.2rem' }}>{'Support families in need across Delhi, UP, MP and Assam'}</Typography>
            </Box>
          </Grid>
        </Grid>
        {/* <Typography variant="h4">{'A Community Initiative'}</Typography>
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
        </Link> */}
      </Paper>
      </Container>
    );
  }
};

export default withStyles(styles, { withTheme: true })(ExplainerBlock);