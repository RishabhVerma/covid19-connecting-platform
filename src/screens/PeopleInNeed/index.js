import React from 'react';
import HowItWorksBlock from '../../components/HowItWorksBlock'
import { withStyles, Box, Typography, Chip } from '@material-ui/core';
import Spacer from '../../components/Spacer';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import axios from 'axios';

const API_URL = 'https://v2-api.sheety.co/848e91664bbff4a95917dd9b6ccdf9f0/coronaIndia/masterData';

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
  }
});

class PeopleInNeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedState: 'All States',
      beneficariesLoading: true,
      beneficaries: [],
    };
  }

  setSelectedState = (event) => {
    this.setState({ selectedState: event.target.value });
  }

  async componentDidMount() {
    this.setState({ beneficariesLoading: true });
    const response = await axios.get(API_URL);
    const beneficiaries = response.data.masterData;
    this.setState({ beneficariesLoading: false, beneficaries: beneficiaries });
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

  renderCard(beneficary) {
    const { theme, classes } = this.props;
    const verified = beneficary.verified == "Yes" ? true : false;
    const expanded = beneficary.expanded !== undefined ? beneficary.expanded : false;
    return (
      <Box key={beneficary.id}>
        <Card>
          <CardContent>
            <Box className={classes.cardTitle}>
              <Typography gutterBottom variant="h5" component="h2">{beneficary.name}</Typography>
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
      </Box>
    );
  }
  
  renderAllCards() {
    const { beneficaries, selectedState } = this.state;
    return (
      <Box>
        {beneficaries.map(beneficary => {
          if (selectedState === 'All States') {
            return this.renderCard(beneficary);
          } else {
            if (selectedState === beneficary.state) {
              return this.renderCard(beneficary);
            }
          }
        })}
      </Box>
    );
  }

  render() {
    const { classes, theme  } = this.props;
    const { selectedState, beneficariesLoading, beneficaries } = this.state;
    return (
      <>
        <HowItWorksBlock />
        <Box className={classes.container}>
          <Spacer height={theme.spacing(2)} />
          <Typography variant="h3">HELP US, HELP THEM</Typography>
          <Spacer height={theme.spacing(1)} />
          <Typography variant="body1" align="justify">{'We have a team of volunteers and social activists working relentlessly in and around Delhi and UP to deliver essentials to stranded(due to lockdown) migrant workers or residents of densely packed slums or another word for underserved. We have helped about 120 families till now and over thousands await. All help in terms of money and labour is welcome and needed desperately.'}</Typography>
          <br />
          <Typography variant="body1" align="justify" style={{fontWeight: 900}}>
            {'We are working on building this web page which will show you a list of all people who need help in the areas we are working in. Currently you can see a list of few such people who need help. We are working on verifying the data and showing you a complete list in a few days.'}
          </Typography>
          <br />
          <Typography variant="body1">{'For volunteering on-ground, please call 899765210.'}</Typography>
          <br />
          {/* <Typography variant="body1">{'To donate funds directly to beneficiaries, please browse through this crowd-sourced and further verified by our team.'}</Typography>
          <Typography variant="body1">{'You can also just donate money to us. We are in the process of setting up an on online page to collect payments. Till then you can get in touch with us directly on the number given above.'}</Typography>
          <Spacer height={theme.spacing(1)} />
          <Typography variant="body1">{'Here is a list of all the people who need help. You can filter the list by state using the dropdown below.'}</Typography>
          <Spacer height={theme.spacing(2)} /> */}
          {/* <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="state-filter-label">State</InputLabel>
            <Select
              labelId="state-filter-label"
              id="state-filter"
              value={selectedState}
              label="State"
              onChange={this.setSelectedState}
            >
              <MenuItem value={'All States'}>All States</MenuItem>
              <MenuItem value={'Haryana'}>Haryana</MenuItem>
              <MenuItem value={'Delhi'}>Delhi</MenuItem>
              <MenuItem value={'Uttar Pradesh'}>Uttar Pradesh</MenuItem>
            </Select>
          </FormControl>
          <Spacer height={theme.spacing(2)} /> */}
          { beneficariesLoading ? <Typography variant="body1">Loading...</Typography> : this.renderAllCards() }
          <Spacer height={theme.spacing(2)} />

        </Box>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(PeopleInNeed);