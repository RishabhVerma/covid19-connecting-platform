import React from 'react';
import { Typography, Grid, Box, withStyles, Container, Button, Link } from '@material-ui/core';

import Spacer from '../../components/Spacer';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
  }
});

export class LandingPage extends React.Component {
  render() {
    const { classes, theme } = this.props;
    return (
      <Box className={classes.container}>
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h2" align="center">India Against Corona</Typography>
          <Spacer height={theme.spacing(2)} />
          <Typography variant="body1" align="justify">{'Manika Didi used to go to a big building to clean it everyday. Now that it’s shut, she stays at home. Her monthly budget is gone like her job. She has a family of 4.'}</Typography>
          <br />
          <Typography variant="body1" align="justify">{'Naresh had come to Delhi to work on a big building. Construction stopped mid-way because of the whole virus situation. Has been living in a makeshift tent with all his fellows as ALL modes transport have been stopped. '}</Typography>
          <br />
          <Typography variant="body1" align="justify">{'Umaid bhai’s house had burnt in the Maujpur riots that took place in Delhi during January-February. His wife died, survived by him and their 3 kids.'}</Typography>
          <br />
          <Typography variant="body1" align="justify">{'COVID-19 has wreaked havoc for the under served in India. It has amplified their everyday struggles and has been a cause for casualties, even. They are suffering and we all know them – they are your household help, vegetable vendors, istri bhaiya or the innumerable migrant workers who are stranded kms away from their home because of this unplanned lockdown. '}</Typography>
          <br />
          <Typography variant="body1" align="justify">{'They need constant supply of food-ration, cooking oil, stove. We are a team of volunteers and social activists who started as informal whatsapp groups and now have over 100 enablers working relentlessly in and around Delhi and UP to deliver essentials to vulnerable sections of the society.'}</Typography>
          <br />
          <Typography variant="body1" align="justify">{'You can help us by letting us know more about people who are in need of help. Or look at list of people who need help. You can directly get in touch with them.'}</Typography>
          <br />
          <Link href="/enablerLanding">
            <Button variant="contained" color="primary" className={classes.btn} size="large" disableElevation>
              {'Know someone in need of help?'}
            </Button>
          </Link>
          <Spacer height={theme.spacing(2)} />
          <Link href="/enablerLanding">
            <Button variant="contained" color="primary" className={classes.btn} size="large" disableElevation>
              'Click to see people who need help'
            </Button>
          </Link>
        </Box>
      </Container>
      </Box>
    );
  }
};

export default withStyles(styles, {withTheme: true})(LandingPage);