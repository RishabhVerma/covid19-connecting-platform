import React from 'react';
import ReactGA from 'react-ga';

import { withStyles, Box, Typography, Chip, Container, Grid, Button, Checkbox, Slider, Fab } from '@material-ui/core';
import { SemipolarSpinner } from 'react-epic-spinners';

import PersonIcon from '@material-ui/icons/Person';

import Spacer from '../../components/Spacer';
import NavBar from '../LandingPage/components/NavBar'
import ExplainerBlock from '../../components/ExplainerBlock';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import axios from 'axios';

var sha512 = require("sha512")


const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/masterData';

let hashSequence;


const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  verifiedChip: {
    color: '#24a465',
    borderColor: '#24a465',
  },
  notVerifiedChip: {
    color: '#d14836',
    borderColor: '#d14836'
  },
  cardMain:{
    background: 'linear-gradient(0deg, rgba(47,189,195,1) 12%, rgba(36,152,110,1) 60%);',
  },
  cardTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between'
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

class PeopleInNeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedState: 'All States',
      selectedDistrict: 'All Cities',
      selectedDonationAmount : null,
      districtList: [],
      sliderMarks : [],
      amountList : [],
      beneficariesLoading: true,
      beneficaries: [],
      selectedBeneficary : {},
      states : {},
      amountToBeDonated : 0,
    };
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
    let selectedBeneficary = this.state.beneficaries.filter((b)=>b.id==event.target.name)
    selectedBeneficary[0].isChecked = event.target.checked
    this.setState({
      selectedBeneficary : selectedBeneficary
    })
  }

  async componentDidMount() {
    const { states, amountList } = this.state;

    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

    this.setState({ beneficariesLoading: true });
    const response = await axios.get(API_URL);
    const beneficiaries = response.data.masterData;
    let beneficiariesCopy = []; 
    beneficiaries.forEach((b)=>{
      let eachBeneficiary = Object.assign(b, { isChecked : false })
      beneficiariesCopy.push(eachBeneficiary)
      if(states[b.state.trim()]==undefined){
        states[b.state.trim()] = []
      }
      if(states[b.state.trim()].indexOf(b.district.trim())<0 && b.district!=''){
        states[b.state.trim()].push(b.district.trim())
      }
      if(amountList.indexOf(b.donationAmount)<0){
        amountList.push(b.donationAmount)
      }
    })
    this.setState({ beneficariesLoading: false, beneficaries: beneficiariesCopy, amountList : amountList.sort((a, b)=>a-b) });
  }

  handleBeneficaryCardToggle = (id) => {
    const { beneficaries } = this.state;
    let benIndex = null;
    beneficaries.forEach((b, index) => {
      if (b.id === id) {
        benIndex = index;
      }
    });
    if (beneficaries[benIndex].expanded === undefined) {
      beneficaries[benIndex].expanded = true;
    } else {
      beneficaries[benIndex].expanded = !beneficaries[benIndex].expanded;
    }
    this.setState({ beneficaries: beneficaries });
  }

  generateHashKey = (txnId, amount) => {
    hashSequence = `wu5IxsVg|${txnId}|${amount}|test product info|Saquib||||||||||||UrnK28wI9Y`;
    let hash = sha512(hashSequence)

    return hash.toString("hex")
  }

  payUMoney = (count) => {
    
    console.log(count)
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

  renderCard(beneficary) {
    const { theme, classes } = this.props;
    const verified = beneficary.verified == "Yes" ? true : false;
    const expanded = beneficary.expanded !== undefined ? beneficary.expanded : false;
    return (
      <Grid item xs={12} md={6} lg={4} key={beneficary.id}>
        <Card>
          <CardContent className={classes.cardMain}>
            <Box className={classes.cardTitle}>
              <Typography gutterBottom variant="h5" component="h2">{beneficary.name}</Typography>
              <Checkbox
                name={beneficary.id}
                checked={beneficary.isChecked}
                onChange={this.handleCheckboxSelect}
                color="primary"
                className={classes.checkbox}
                // inputProps={{ 'aria-label': 'primary checkbox' }}
              >
              </Checkbox>
              <Chip
                label={verified ? "Verified" : "Not Verified" }
                className={verified ? classes.verifiedChip : classes.notVerifiedChip}
              />
            </Box>
            <Typography variant="h6" component="h3" color={'textSecondary'}>
            {beneficary.area}, {beneficary.district}, {beneficary.state} ({beneficary.pinCode})
            </Typography>
            <Typography variant="h6" component="h3" color={'textSecondary'}>Mobile: {beneficary.mobile}</Typography>
            <Typography variant="h6" component="h3" color={'textSecondary'}>
              Donation Amount: <Chip label={`Rs.${beneficary.donationAmount}`} color="primary" />
            </Typography>
            {expanded ? (<Box>
              <Spacer height={theme.spacing(1)} />
              <Typography variant="h6" component="h3">What do they need?</Typography>
              <Typography variant="body1">
                {beneficary.needs && beneficary.needs.split("\n").map((i,key) => {
                  return <Typography variant="body1" key={key}>{i}</Typography>;
                })}
              </Typography>
              <Spacer height={theme.spacing(1)} />
              <Typography variant="body1">
                {beneficary.notes && beneficary.notes.split("\n").map((i,key) => {
                  return <Typography variant="body1" key={key}>{i}</Typography>;
                })}
              </Typography>
              <Spacer height={theme.spacing(2)} />
              <Typography variant="h6" component="h3">Who referred them?</Typography>
              <Typography variant="body1">{beneficary.enablerName}</Typography>
              <Typography variant="body1">{beneficary.enablerMobile}</Typography>
            </Box>) : (<></>)}
          </CardContent>
          <CardActions>
            <Box className={classes.cardActionsContainer}>
              <Button
                variant="contained"
                disableElevation
                onClick={() => this.handleBeneficaryCardToggle(beneficary.id)}
              >
                {expanded ? 'Close' : 'Know More'}
              </Button>
            </Box>
          </CardActions>
        </Card>
        <Spacer height={theme.spacing(2)} />
      </Grid>
    );
  }
  
  renderAllCards() {
    const { beneficaries, selectedState, selectedDistrict, selectedDonationAmount } = this.state;
    let rend = [];
    return (
      <Grid container spacing={3}>
        {beneficaries.map(beneficary => {
          if (selectedState === 'All States' && selectedDonationAmount === null) {
            // console.log("ALL RENDERED")
            return this.renderCard(beneficary);
          }
          else if(selectedState===beneficary.state && selectedDonationAmount===null){
            if (selectedDistrict===beneficary.district){
              // console.log(`State ${selectedState} District ${selectedDistrict}`)
              return this.renderCard(beneficary)
            }
            else if(selectedDistrict==='All Cities'){
              // console.log(`Just State ${selectedState}`)
              return this.renderCard(beneficary);
            }
          }
          else if (selectedDonationAmount>=beneficary.donationAmount && selectedState === 'All States'){
            // console.log(`Just Donation ${selectedDonationAmount}`)
            return this.renderCard(beneficary);
          }
          else if (selectedDonationAmount>=beneficary.donationAmount && selectedState===beneficary.state){
            if(selectedDistrict==beneficary.district){
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

  render() {
    const { classes, theme  } = this.props;
    const { selectedState, selectedDistrict, selectedDonationAmount, beneficariesLoading, beneficaries } = this.state;
    let count = 0;
    let allStates = Object.keys(this.state.states)
    return (
      <>
        <NavBar />
        <ExplainerBlock header1='600INR provides a family with 2 week supply of food & essentials.'/>
        <Container maxWidth="lg" style={{ padding: 0 }}>
        <Box className={classes.container}>
          <Spacer height={theme.spacing(2)} />
          <Typography variant="h4" component="h1">Transparency  Matters</Typography>
          <br />
          <Typography variant="body1">
            <strong>
              {'View and connect with our crowdsources in-need beneficiaries.'}
            </strong>
          </Typography>
          <br />
          <Typography variant="body1">
            {'We are building a publicly available list for you to connect directly with those in need. Below is a list of families who need direct support, if you are located nearby and interested in directly supporting. Contact the numbers below directly! '}
          </Typography>
          <br />
          <Typography variant="body1" align="justify">
            <em>
              {'You can filter by a particular state to see beneficiaries from one particular state.'}
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
                  defaultValue={this.state.amountList[this.state.amountList.length-1]+1000}
                  value={selectedDonationAmount}
                  onChange={this.setSelectedDonationAmount}
                  aria-labelledby="continuous-slider"
                  max={this.state.amountList[this.state.amountList.length-1]+1000}
                  valueLabelDisplay="auto"
                />
                <Typography variant="body1" gutterBottom>Filter by Donation Amount</Typography>
            </Grid>
            }
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            {
              beneficaries.map((b)=>{
                if(b.isChecked==true){
                  count+=b.donationAmount;
                  this.state.amountToBeDonated = count;
                  return(
                      <Fab key={b.id} size="small" variant="extended" color="primary" aria-label="add" className={classes.fabButton}>
                        <PersonIcon />
                        {' '}{b.name}{'  '}Rs.{b.donationAmount}
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
          { beneficariesLoading ? <Grid container direction="row" justify="center" alignItems="center"><SemipolarSpinner color="#0122ff" size="40"/></Grid> : this.renderAllCards() }
          <Spacer height={theme.spacing(2)} />
        </Box>
        </Container>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(PeopleInNeed);