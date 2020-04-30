import React from 'react';
import ReactGA from 'react-ga';

import { withStyles, Box, Typography, Chip, Container, Grid, Button, Checkbox, Slider, Fab, CircularProgress } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Spacer from '../../components/Spacer';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import axios from 'axios';

import jsSHA from 'jssha';
var sha = new jsSHA('SHA-512', "TEXT");

// import sha512 from 'js-sha512';

import NavBar from '../LandingPage/components/NavBar';
import ExplainerBlock from '../../components/ExplainerBlock';


const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/masterData';

let hashSequence;

hashSequence = "ENTER_KEY|202004272350334|200|Saquib|saquib18@navgurukul.org|udf1|udf2|udf3|udf4|udf5||||||ENTER_SALT";
sha.update(hashSequence)
var hashKey = sha.getHash("HEX")

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
      selectedDonationAmount : 0,
      districtList: [],
      sliderMarks : [],
      amountList : [],
      beneficariesLoading: true,
      beneficaries: [],
      selectedBeneficary : {},
      states : {},
    };
  }

  setSelectedState = (event) => {
    this.setState({ selectedState: event.target.value, selectedDistrict: 'All Cities' });
  }

  setSelectedDistrict = (event) => {
    this.setState({ selectedDistrict : event.target.value });
  }

  setSelectedDonationAmount = (event) => {
    this.setState({ selectedDonationAmount : event.target.value, selectedDistrict: 'All Cities', selectedState: 'All States' });
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
    // let statesAlreadyAdded = [];
    beneficiaries.forEach((b)=>{
      let eachBeneficiary = Object.assign(b, { isChecked : false })
      beneficiariesCopy.push(eachBeneficiary)
      // let stateObject = {}
      if(states[b.state.trim()]==undefined){
        states[b.state.trim()] = []
      }
      if(states[b.state.trim()].indexOf(b.district.trim())<0 && b.district!=''){
        states[b.state.trim()].push(b.district.trim())
      }
      if(amountList.indexOf(b.donationAmount)<0){
        amountList.push(b.donationAmount)
      }
      // if(statesAlreadyAdded.indexOf(b.state.trim())<0){
      //   statesAlreadyAdded.push(b.state.trim())
      //   stateObject[b.state] = []
      //   this.state.states.push(stateObject)
      // }
    })
    amountList.sort((a, b)=>a-b)
    this.state.sliderMarks = amountList.map((a)=>{
      return (
        {
          value : a,
          label : a.toString()
        }
      )
    })
    this.setState({ beneficariesLoading: false, beneficaries: beneficiariesCopy });
    console.log(this.state.sliderMarks)
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

  payUMoney = () => {
    var RequestData = {
      key: 'wu5IxsVg',
      txnid: 'xsuags798',
      hash: 'hashKey',
      amount: '200',
      firstname: 'Saquib',
      email: 'saquib18@navgurukul.org',
      phone: '8130378953',
      productinfo: 'Donation',
      surl : 'https://indiagainstcorona.com',
      furl: 'https://indiagainstcorona.com',
      udf5: 'hello',
      mode:'dropout'
    };
    let data = RequestData;
    var text = data.key+'|'+data.txnid+'|'+data.amount+'|'+data.productinfo+'|'+data.firstname+'|'+data.email+'|||||'+data.udf5+'||||||'+'UrnK28wI9Y';
    console.log("------");
    console.log(text);
    console.log("------");
    var hash = sha512(text);
    console.log("------");
    console.log(hash);
    console.log("------");
    window.bolt.launch(RequestData, 
      {
        responseHandler : function(response){console.log(response.json())}
      }, 
      {
        catchException : function(response){console.log(response.json())}
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
          <CardContent>
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
                variant="outlined"
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
    return (
      <Grid container spacing={3}>
        {beneficaries.map(beneficary => {
          if (selectedState === 'All States' && selectedDonationAmount === 0) {
            return this.renderCard(beneficary);
          } 
          else {
            if(selectedDistrict !== 'All Cities' && selectedDistrict === beneficary.district) {
              console.log(selectedDistrict)
              return this.renderCard(beneficary);
            }
            else if (selectedDistrict === 'All Cities' && selectedState === beneficary.state && selectedDonationAmount === 0) {
              console.log(selectedState)
              return this.renderCard(beneficary);
            }
            else if (selectedDonationAmount === beneficary.donationAmount) {
              console.log(selectedDonationAmount)
              return this.renderCard(beneficary)
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
        <ExplainerBlock />
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
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="state-filter-label">Donation Amount</InputLabel>
                  <Select
                    labelId="donation-amount-filter-label"
                    id="donation-amount-filter"
                    value={selectedDonationAmount}
                    label="Donation Amount"
                    onChange={this.setSelectedDonationAmount}                    
                  >
                    <MenuItem value={0}> Select Donation Amount </MenuItem>
                    {
                      this.state.amountList.map((a)=>{
                        return(
                          <MenuItem key={a} value={a}> Rs.{a} </MenuItem>
                        )
                      })
                    }
                  </Select>
                </FormControl>                
              </Grid>
            }
            {/* {
              this.state.sliderMarks.length>0 &&
              <Grid item xs={12} md={9} lg={4}>
                <Typography gutterBottom>Donation Amount</Typography>
                <Slider
                  defaultValue={0}
                  getAriaValueText={this.getDonationValue}
                  aria-labelledby="discrete-slider-small-steps"
                  step={50}
                  max={5000}
                  valueLabelDisplay="on"
                  marks={this.state.sliderMarks}
                />
            </Grid>
            } */}
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            {
              beneficaries.map((b)=>{
                if(b.isChecked==true){
                  count+=b.donationAmount;
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
                onClick={this.payUMoney}
              >
                Donate Rs.{count}
              </Button>
            }
          </Grid>
          <Spacer height={theme.spacing(2)} />
          { beneficariesLoading ? <Grid><CircularProgress disableShrink/></Grid> : this.renderAllCards() }
          <Spacer height={theme.spacing(2)} />
        </Box>
        </Container>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(PeopleInNeed);