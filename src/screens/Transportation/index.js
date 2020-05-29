import React, { Component } from 'react';
import { withStyles, Box, Typography, Chip, Container, Grid, Button, Checkbox, Slider, Tooltip, createMuiTheme, MuiThemeProvider, Fab, Card, CardContent, Paper, ThemeProvider } from '@material-ui/core';
import Spacer from '../../components/Spacer';
import NavBar from '../LandingPage/components/NavBar'
import ExplainerBlock from '../../components/ExplainerBlock';
import Carousel from '../LandingPage/components/Carousel';

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { RadarSpinner } from 'react-epic-spinners';

import CarouselImage1 from '../../assets/img/carousel/gharKiAas/slide1.jpg';
import CarouselImage2 from '../../assets/img/carousel/gharKiAas/slide2.jpg';
import CarouselImage3 from '../../assets/img/carousel/gharKiAas/slide3.jpg';

const SLIDES = [
    {
        "id": 1,
        "text": "",
        "img": CarouselImage1,
        "bgPosition": 'center center',
    },
    {
        "id": 2,
        "text": "",
        "img": CarouselImage2,
        "bgPosition": '10% 30%',
    },
    {
        "id": 3,
        "text": "",
        "img": CarouselImage3,
        "bgPosition": '10% 30%',
    },
  ];

import axios from 'axios';
const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/transportation';

const themes = createMuiTheme();

themes.typography.h5 = {
    '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
    [themes.breakpoints.up('md')] : {
        fontSize: '1.2rem',
    },
    [themes.breakpoints.down('sm')] : {
        fontSize: '0.5rem',
    },
    [themes.breakpoints.down('md')] : {
        fontSize: '0.7rem',
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
        background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(242,242,242,1) 100%)',
        justifyContent: 'space-between',
    },
    extraDetails : {
        display: 'flex', 
        justifyContent: 'center', 
        padding: '10px',
        margin: '5px'
    },
    donateBtn : {
        margin: '20px', 
        color: '#224f79', 
        borderWidth: '2px', 
        borderColor: '#224f79', 
        width: '100%',
        '&:hover' : {
            borderWidth: '3px',
            borderColor: '#3378b8',
            color: '#3378b8',
        }
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
                <Paper className={classes.mainCard} elevation={3}>
                    <CardContent style={{margin:'0 auto'}}>
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
                                Number of migrants : <Box style={{margin: '0 5px', padding: '1px 10px', background: '#224f79', color: '#fff'}} border={1} borderRadius={15}>{beneficiary.noOfMigrants}</Box>
                            </Paper>
                            <Paper className={classes.extraDetails} elevation={2}>
                                Donation Amount : <Box style={{margin: '0 5px', padding: '1px 6px', background: '#224f79', color: '#fff'}} border={1} borderRadius={15}>Rs.{beneficiary.donationAmount}</Box>
                            </Paper>
                            <Paper className={classes.extraDetails} elevation={2}>
                                Amount Raised : <Box style={{margin: '0 5px', padding: '1px 6px', background: '#224f79', color: '#fff'}} border={1} borderRadius={15}>Rs.{beneficiary.amountRaised=="" || beneficiary.amountRaised==undefined ? 0 : beneficiary.amountRaised}</Box>
                            </Paper>
                        </Box>
                        <Box style={{display: 'flex', alignItems: 'center'}}>
                            <Button className={classes.donateBtn} variant="outlined">
                                Donate
                            </Button>
                        </Box>
                    </CardContent>
                </Paper>
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
                <NavBar />
                <Carousel slides={SLIDES}/>        
                <ExplainerBlock header1="Support stranded migrant families and individuals through our Ghar ki Aas program."/>
                <Container maxWidth="lg" style={{ padding: 0 }}>
                    <Box className={classes.container}>
                        <Spacer height={theme.spacing(2)} />
                        <Typography variant="h4" component="h1">#GharKiAas</Typography>
                        <br />
                        <Typography variant="body1">
                            <strong>
                            {
                                `Being at home during this crisis shouldn’t be a luxury. We have mobilised our resources to help support the most vulnerable community in this time of crisis — stranded migrant families and individuals.`
                            }
                            </strong>
                            <br/>
                            <strong><em>{`Ghar Ki Aas is providing:`}</em></strong>
                        </Typography>

                        <Typography style={{paddingLeft: '20px', background: '#dfdfdf'}} variant="body1">
                            <strong>1. Travel : </strong>{` From the place of origin to the destination by bus (AC with toilet access).`}                            
                        </Typography>

                        <Typography style={{paddingLeft: '20px', background: '#dfdfdf'}} variant="body1">
                            <strong>2. Meals : </strong>{` Two cooked and hygienically packed meals & water.`}
                        </Typography>

                        <Typography style={{paddingLeft: '20px', background: '#dfdfdf'}} variant="body1">
                            <strong>3. Sanitation kit : </strong>{` including a face mask, gloves, sanitizer, and if needed, sanitary napkins.`}
                        </Typography>

                        <Typography style={{paddingLeft: '20px', background: '#dfdfdf'}} variant="body1">
                            <strong>4. Outside booking assistance : </strong>{` If a small group is in need for travel, and we do not have any bus scheduled for that area, we are arranging their tickets privately to help them board a bus already scheduled for that destination.`}
                        </Typography>

                        <Typography style={{paddingLeft: '20px', background: '#dfdfdf'}} variant="body1">
                            <strong>5. Transit costs : </strong>{` The minor operational costs which includes approvals from government, toll roads, contingencies, tips for service providers, and other operating costs.`}
                        </Typography>

                        <br />
                        <Typography variant="body1">
                            {' You can help stranded families and individuals by selecting a group to sponsor below. You can directly support their trip home.'}
                        </Typography>
                        <br />
                        <Typography variant="body1" align="justify">
                            <em>
                            {'[Select one or more option from the list to support trip home to a stranded migrant worker.]'}
                            </em>
                        </Typography>
                        <br />
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