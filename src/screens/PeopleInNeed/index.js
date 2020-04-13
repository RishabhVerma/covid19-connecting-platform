import React from 'react';
import ReactGA from 'react-ga';
import HowItWorksBlock from '../../components/HowItWorksBlock'
import { withStyles, Box, Typography, Chip, Container } from '@material-ui/core';
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

import NavBar from '../LandingPage/components/NavBar';
import ExplainerBlock from '../../components/ExplainerBlock';


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

    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);

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
              {'List is in development and will be updated soon to reflect the growing number of families in need'}
            </em>
          </Typography>
          <br />
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
        </Container>
      </>
    );
  }
};

export default withStyles(styles, {withTheme: true})(PeopleInNeed);