import React, { Component } from 'react';
import ReactGA from 'react-ga';

import { withStyles, Box, Typography, Chip, Container, Grid, Button, Checkbox, Slider, Tooltip, createMuiTheme, MuiThemeProvider, Fab } from '@material-ui/core';
import { RadarSpinner } from 'react-epic-spinners';

import PersonIcon from '@material-ui/icons/Person';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CancelIcon from '@material-ui/icons/Cancel';

import Spacer from '../../components/Spacer';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import axios from 'axios';

import NavBar from '../LandingPage/components/NavBar'
import ExplainerBlock from '../../components/ExplainerBlock';

var sha512 = require("sha512")

let hashSequence;


const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/businessBeneficiary';

const customizedTheme = createMuiTheme({
    props : {
        MuiTooltip : {
            enterTouchDelay : 100,
            arrow : true,
            placement : 'right'
        }
    }
})
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
        background : 'linear-gradient(0deg, rgba(73,253,255,1) 0%, rgba(45,140,253,1) 100%)'
    },
    cardTitle: {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'space-between',
      color: 'red',
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
  });

class LivelihoodSupport extends Component {
    constructor(){
        super()
        this.state = {
            selectedState: 'All States',
            selectedDistrict: 'All Cities',
            selectedDonationAmount : 0,
            districtList: [],
            amountList : [],
            beneficiariesLoading : true,
            beneficiaries : [],
            selectedBeneficary : {},
            states : {},
            amountToBeDonated : 0,
        }
    }

    setSelectedState = (event) => {
        this.setState({ selectedState: event.target.value, selectedDistrict: 'All Cities' });
    }
    
    setSelectedDistrict = (event) => {
        this.setState({ selectedDistrict : event.target.value });
    }
    
    setSelectedDonationAmount = (event, newValue) => {
        this.setState({ selectedDonationAmount : newValue });
    }
    
    handleCheckboxSelect = (event) => {
        let selectedBeneficary = this.state.beneficiaries.filter((b)=>b.id==event.target.name)
        selectedBeneficary[0].isChecked = event.target.checked
        this.setState({
          selectedBeneficary : selectedBeneficary
        })
    }

    async componentDidMount(){
        const { states, amountList } = this.state;

        this.setState({ beneficiariesLoading : true });
        const response = await axios.get(API_URL);
        const beneficiaries = response.data.businessBeneficiary;
        let beneficiariesCopy = []; 
        beneficiaries.forEach((b)=>{
            let eachBeneficiary = Object.assign(b, { isChecked : false })
            beneficiariesCopy.push(eachBeneficiary)
            if(states[b.state.trim()]==undefined){
                states[b.state.trim()] = []
            }
            if(states[b.state.trim()].indexOf(b['district/city'].trim())<0 && b['district/city']!=''){
                states[b.state.trim()].push(b['district/city'].trim())
            }
            if(amountList.indexOf(parseInt(b.needs))<0){
                amountList.push(parseInt(b.needs))
            }
        })
        await this.setState({ 
            beneficiariesLoading: false, 
            beneficiaries: beneficiariesCopy, 
            amountList : amountList.sort((a, b)=>a-b),
        });
        this.setState({
            selectedDonationAmount : amountList[amountList.length-1]
        })
    }

    handleBeneficiaryCardToggle = (id) => {
        const { beneficiaries } = this.state;
        let benIndex = null;
        beneficiaries.forEach((b, index) => {
          if (b.id === id) {
            benIndex = index;
          }
        });
        if (beneficiaries[benIndex].expanded === undefined) {
          beneficiaries[benIndex].expanded = true;
        } else {
          beneficiaries[benIndex].expanded = !beneficiaries[benIndex].expanded;
        }
        this.setState({ beneficiaries: beneficiaries });
    }

    generateHashKey = (txnId, amount) => {
        hashSequence = `wu5IxsVg|${txnId}|${amount}|test product info|Saquib||||||||||||UrnK28wI9Y`;
        let hash = sha512(hashSequence)
    
        return hash.toString("hex")
    }
    
    payUMoney = (count) => {
    
        let txnId = new Date().toLocaleString().replace(/\D+/g, '')
        let hashKey = this.generateHashKey(txnId, this.state.amountToBeDonated)
        
        var RequestData = {
          key: 'wu5IxsVg',
          txnid: txnId,
          hash: hashKey,
          amount: this.state.amountToBeDonated,
          firstname: 'Saquib',
          email: '',
          phone: '',
          productinfo: 'test product info',
          surl : 'https://indiagainstcorona.com',
          furl: 'https://indiagainstcorona.com',
          mode:'dropout'
        };
    
        window.bolt.launch(RequestData, 
          {
            responseHandler : function(response){console.log(response)}
          }, 
          {
            catchException : function(response){console.log(response)}
          }
        )
    }

    renderCard(beneficiary){
        const { theme, classes } = this.props;
        const expanded = beneficiary.expanded !== undefined ? beneficiary.expanded : false;
    
        return(
            <Grid item xs={12} md={6} lg={4} key={beneficiary.id}>
                <Card>
                    <CardContent className={classes.cardMain}>
                        <Box className={classes.cardTitle}>
                            <Typography gutterBottom variant="h5" component="h2">{beneficiary.name}</Typography>
                            <Checkbox
                                name={beneficiary.id}
                                checked={beneficiary.isChecked}
                                onChange={this.handleCheckboxSelect}
                                color="primary"
                                className={classes.checkbox}
                                // inputProps={{ 'aria-label': 'primary checkbox' }}
                            >
                            </Checkbox>
                        </Box>
                        <Typography variant="h6" component="h3" color={'textSecondary'}>
                            {beneficiary.area}, {beneficiary['district/city']}, {beneficiary.state}
                        </Typography>
                        <Typography variant="h6" component="h3" color={'textSecondary'}>Mobile : {beneficiary.contact}</Typography>
                        <Box>
                            <MuiThemeProvider theme={customizedTheme}>
                                    <Typography variant="h6" component="h3" color={'textSecondary'}>
                                        Needs : <Tooltip title={`Supports : ${beneficiary.supports}`}><Chip className={classes.neededChip} label={`Rs. ${beneficiary.needs}`}></Chip></Tooltip>
                                    </Typography>
                            </MuiThemeProvider>
                        </Box>
                        {
                            expanded &&
                            <Box>
                                <Typography variant="h6" component="h3" color={'textSecondary'}>
                                    Income : <Chip className={classes.incomeChip} label={beneficiary.income}></Chip>
                                </Typography>
                                <Typography variant="h6" component="h3" color={'textSecondary'}>Pre-pandemic Occupation : {beneficiary.prePandemicOccupation}</Typography>
                            </Box>

                        }
                    </CardContent>
                    <CardActions>
                        <Button
                            onClick={() => this.handleBeneficiaryCardToggle(beneficiary.id)}
                        >
                            {expanded ? <>Collapse{' '}<CancelIcon /></> : <>Expand{' '}<ArrowDropUpIcon /></>}
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }

    renderAllCards(){
        const { beneficiaries, selectedState, selectedDistrict, selectedDonationAmount, amountList } = this.state;
        let rend = [];
        return (
          <Grid container spacing={3}>
            {beneficiaries.map(beneficary => {
              if (selectedState === 'All States' && selectedDonationAmount === amountList[amountList.length-1]) {
                // console.log("ALL RENDERED")
                return this.renderCard(beneficary);
              }
              else if(selectedState===beneficary.state && selectedDonationAmount === amountList[amountList.length-1]){
                if (selectedDistrict===beneficary['district/city']){
                  // console.log(`State ${selectedState} District ${selectedDistrict}`)
                  return this.renderCard(beneficary)
                }
                else if(selectedDistrict==='All Cities'){
                  // console.log(`Just State ${selectedState}`)
                  return this.renderCard(beneficary);
                }
              }
              else if (selectedDonationAmount>=parseInt(beneficary.needs) && selectedState === 'All States'){
                // console.log(`Just Donation ${selectedDonationAmount}`)
                return this.renderCard(beneficary);
              }
              else if (selectedDonationAmount>=parseInt(beneficary.needs) && selectedState===beneficary.state){
                if(selectedDistrict==beneficary['district/city']){
                  // console.log(`Donation ${selectedDonationAmount} + State ${selectedState} + District ${selectedDistrict}`)
                  return this.renderCard(beneficary)
                }
                else if (selectedDistrict==='All Cities'){
                  // console.log(`Donation ${selectedDonationAmount} + State ${selectedState}`)
                  return this.renderCard(beneficary);
                }
              }
            })}
          </Grid>
        );
    }

    render(){
        const { beneficiaries, beneficiariesLoading, selectedState, selectedDistrict, selectedDonationAmount } = this.state;
        const { classes, theme } = this.props;
        let allStates = Object.keys(this.state.states);
        let count = 0;
        return(
            <>
                <NavBar />
                <ExplainerBlock />
                <Container maxWidth="lg" style={{ padding: 0 }}>
                <Box className={classes.container}>
                    <Spacer height={theme.spacing(2)} />
                    <Typography variant="h4" component="h1">#HelpSmallBusinesses</Typography>
                    <br />
                    <Typography variant="body1">
                        <strong>
                        {'In the current crisis, many daily wage earners have lost their livelihoods under lockdown – but the question for many remains: without resources, how will they open their shops, restaurants, and roadside services?'}
                        </strong>
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        {' Support a small business owner directly. As cities reopen, help daily wage earners to restart their livelihoods with a direct cash transfer for their business.'}
                    </Typography>
                    <br />
                    <Typography variant="body1" align="justify">
                        <em>
                        {'[Select one or more beneficiaries from the list to support Indian small businesses.]'}
                        </em>
                    </Typography>
                    <br />
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={9} lg={4}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="state-filter-label">State</InputLabel>
                            <Select
                            labelId="state-filter-label"
                            id="state-filter"
                            value={selectedState}
                            label="State"
                            onChange={this.setSelectedState}
                            >
                            <MenuItem value={'All States'}>All States</MenuItem>
                            {
                                allStates.map((s)=>{
                                return(
                                    <MenuItem key={s} value={s}> {s} </MenuItem>
                                )
                                })
                            }
                            </Select>
                        </FormControl>
                        </Grid>
                        {
                            selectedState!=='All States' &&
                            <Grid item xs={12} md={9} lg={4}>
                                <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="state-filter-label">City</InputLabel>
                                <Select
                                    labelId="city-filter-label"
                                    id="city-filter"
                                    value={selectedDistrict}
                                    label="City"
                                    onChange={this.setSelectedDistrict}
                                >
                                    <MenuItem value='All Cities'>All Cities</MenuItem>
                                    {
                                    this.state.states[selectedState].map((districts)=>{
                                        return(
                                        <MenuItem key={districts} value={districts}> {districts} </MenuItem>
                                        )
                                    })
                                    }
                                </Select>
                                </FormControl>
                            </Grid>
                        }
                        
                        {
                        <Grid item xs={12} md={9} lg={4}>
                            <Slider
                                value={selectedDonationAmount}
                                onChange={this.setSelectedDonationAmount}
                                step={500}
                                aria-labelledby="continuous-slider"
                                min={this.state.amountList[0]}
                                max={this.state.amountList[this.state.amountList.length-1]+1000}
                                valueLabelDisplay="auto"
                            />
                            <Typography variant="body1" gutterBottom>Filter by Donation Amount</Typography>
                        </Grid>
                        }

                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        {
                            beneficiaries.map((b)=>{
                                if(b.isChecked==true){
                                count+=parseInt(b.needs);
                                this.state.amountToBeDonated = count;
                                return(
                                    <Fab key={b.id} size="small" variant="extended" color="primary" aria-label="add" className={classes.fabButton}>
                                        <PersonIcon />
                                        {' '}{b.name}{'  '}Rs.{b.needs}
                                    </Fab>
                                ) 
                            }
                        })
                        }
                        {
                        (count>0) &&
                        <Button 
                            size="small"
                            variant="contained" 
                            color="primary" 
                            style={{ backgroundColor: '#000'}}
                            onClick={() => this.payUMoney(count)}
                        >
                            Donate INR {count}
                        </Button>
                        }
                    </Grid>
                    <Spacer height={theme.spacing(2)} />
                        { beneficiariesLoading ? <Grid container direction="row" justify="center" alignItems="center"><RadarSpinner color="#0122ff" size="40"/></Grid> : this.renderAllCards() }
                    <Spacer height={theme.spacing(2)} />
                    </Box>
                </Container>
            </>
        )
    }
}

export default withStyles(styles, {withTheme: true})(LivelihoodSupport);
