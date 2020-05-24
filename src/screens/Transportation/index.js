import React, { Component } from 'react';
import { withStyles, Box, Typography, Chip, Container, Grid, Button, Checkbox, Slider, Tooltip, createMuiTheme, MuiThemeProvider, Fab, Card, CardContent, Paper, ThemeProvider } from '@material-ui/core';
import Spacer from '../../components/Spacer';
import Navbar from '../LandingPage/components/NavBar';
import ExplainerBlock from '../../components/ExplainerBlock';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { RadarSpinner } from 'react-epic-spinners';

import axios from 'axios';

const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/transportation';

const themes = createMuiTheme();

themes.typography.h5 = {
    [themes.breakpoints.up('md')] : {
        fontSize: '1.3rem',
    },
    [themes.breakpoints.down('md')] : {
        fontSize: '1.5rem'
    }
}



const styles = theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2)
    },
    incomeChip: {
      color: '#000000',
      backgroundColor: '#a3b8cc'
    },
    neededChip: {
      color: '#00000',
      backgroundColor: '#96e0a1'
    },
    cardMain: {
        background : 'linear-gradient(338deg, rgba(242,34,34,1) 0%, rgba(255,178,233,1) 100%)'
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
    },
    cardActionsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    formControl: {
      width: '100%',
    },
    checkbox : {
      position: 'relative',
      right: '5px'
    },
    fabButton: {
      margin: '5px',
    },
    citiesCard : {
        display:'flex',
        flexDirection: 'row',
        padding: '10px',
        alignItems: 'center',
    },
    mainCard : {
        display: 'flex',
        flexDirection: 'row',
        background: '#f2f3f5',
        justifyContent: 'space-between',
    },
    extraDetails : {
        display: 'flex', 
        justifyContent: 'center', 
        padding: '10px',
        margin: '5px'
    }
});

class Transportation extends Component {
    constructor(){
        super()
        this.state = {
            beneficiary : [],
            beneficiariesLoading : true,
        }
    }

    async componentDidMount(){
        const response = await axios.get(API_URL);
        const beneficiary = response.data.transportation;
        await this.setState({
            beneficiary : beneficiary,
            beneficiariesLoading : false
        })
    }
    
    renderCard(beneficiary) {

        const { theme, classes } = this.props;

        return(
            <Grid item xs={12} md={6} lg={4} key={beneficiary.id}>
                <Card className={classes.mainCard} elevation={3}>
                    <CardContent>
                        <Box className={classes.citiesCard}>
                            <Box style={{padding: '10px'}} border={1} borderRadius={5}>
                                <Typography style={{fontSize: '10px', color: '#8c8989', fontWeight: '500'}}>Source City</Typography>
                                <ThemeProvider theme={themes}>
                                    <Typography variant="h5" component="h5">{beneficiary.sourceCity}</Typography>
                                </ThemeProvider>
                                <Typography style={{fontSize: '10px', fontWeight: '500'}}>{beneficiary.sourceState}</Typography>
                            </Box>
                            <ArrowRightAltIcon />
                            <Box style={{display: 'block', justifyContent: 'space-between'}} border={1} borderRadius={50}>
                                <Typography style={{fontSize: '10px', padding: '0 12px'}}>{beneficiary.distance}km</Typography>
                            </Box>
                            <ArrowRightAltIcon />
                            <Box style={{padding: '10px'}} border={1} borderRadius={5}>
                                <Typography style={{fontSize: '10px', color: '#8c8989', fontWeight: '500'}}>Destination City</Typography>
                                <ThemeProvider theme={themes}>
                                    <Typography variant="h5" component="h5">{beneficiary.destinationCity}</Typography>
                                </ThemeProvider>
                                <Typography style={{fontSize: '10px', fontWeight: '500'}}>{beneficiary.sourceState}</Typography>
                            </Box>
                        </Box>
                        <Box style={{display: 'block', margin: '10px'}}>
                            <Paper className={classes.extraDetails} elevation={2}>
                                Number of migrants : <Box style={{margin: '0 5px', padding: '1px 10px', background: '#000', color: '#fff'}} border={1} borderRadius={15}>{beneficiary.noOfMigrants}</Box>
                            </Paper>
                            <Paper className={classes.extraDetails} elevation={2}>
                                Donation Amount : <Box style={{margin: '0 5px', padding: '1px 6px', background: '#000', color: '#fff'}} border={1} borderRadius={15}>Rs.{beneficiary.donationAmount}</Box>
                            </Paper>
                            <Paper className={classes.extraDetails} elevation={2}>
                                Amount Raised : <Box style={{margin: '0 5px', padding: '1px 6px', background: '#000', color: '#fff'}} border={1} borderRadius={15}>Rs.{beneficiary.amountRaised=="" || beneficiary.amountRaised==undefined ? 0 : beneficiary.amountRaised}</Box>
                            </Paper>
                        </Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <Button style={{margin: '20px', color: '#0051ff', borderWidth: '3px', borderColor: '#0051ff', width: '100%'}} variant="outlined">
                                Donate
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    renderAllCards(){
        const { beneficiary } = this.state;
        return(
            <Grid container spacing={3}>
                {
                    beneficiary.map((b)=>{
                        return this.renderCard(b)
                    })
                }
            </Grid>
        )
    }

    render(){
        const { beneficiariesLoading } = this.state;
        const { classes, theme } = this.props;

        return(
            <>
                <Navbar />
                <ExplainerBlock />
                <Container maxWidth="lg" style={{ padding: 0 }}>
                    <Box className={classes.container}>
                        <Spacer height={theme.spacing(2)} />
                            { beneficiariesLoading ? <Grid container direction="row" justify="center" alignItems="center"><RadarSpinner color="#0122ff" size="40"/></Grid> : this.renderAllCards() }
                        <Spacer height={theme.spacing(2)} />
                    </Box>
                </Container>
            </>
        )
    }
}

export default withStyles(styles, {withTheme: true})(Transportation)