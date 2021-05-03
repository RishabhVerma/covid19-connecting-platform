import React from 'react';
import { withStyles, Paper, Typography, Button, Link } from '@material-ui/core';
import Spacer from '../../../components/Spacer';
import MeetTheTeam from '../../LandingPage/components/MeetTheTeam';
import OurImpact from './OurImpact';

const styles = theme => ({
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
});

class SmallDescription extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5">Who are we?</Typography>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{ backgroundColor: '#e8e8e8de' }}>
        <Typography variant="body1" align="justify">
        India Against Corona is a group of volunteers facilitated by TYCIA Foundation, which started as an informal WhatsApp group in the year 2020 and have now reached almost 150+ members. Our goal is to urgently fill the gaps created due to the COVID crisis. 
        </Typography>
      </Paper>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5">Projects in Action</Typography>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{ backgroundColor: '#e8e8e8de' }}>
        <ul>
          <li>
            <Typography variant="body1">
              <strong>Frontline workers in hospitals:</strong> India Against Corona is partnering with government hospitals in order to provide trained human resources to assist their overburdened doctors and nurses. Currently, our workers on the ground at GIMS in Noida have assisted in the registration of over 1000 patients. We are currently in talks with other government hospitals about arranging similar partnerships.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Auto Ambulances:</strong> We have partnered with the Delhi government to obtain permissions for our fleet of 15 auto-ambulances which are providing free rides to the hospital for critically ill patients who do not have access to other transportation. The auto-ambulances are fully sanitized and the drivers, supported by TYCIA Foundation, complete their work in full PPE gear.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Mask and PPE Distribution:</strong> With the makeshift hospitals that have sprung up in Delhi, oftentimes there are not enough PPE kits for patients and/or their relatives. After seeing multiple cases of people catching COVID (and then further transmitted it) through hospital visits, we started a PPE kit awareness and distribution drive across hospitals. We have already procured 200,000 PPE kits which our team is working to distribute across Delhi NCR. 
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Oxygen Connect:</strong> Through our previous fundraising initiative, we managed to procure 10 concentrators and around 30 oxygen cylinders (so far) which are currently circulating amongst families in Delhi NCR our COVID-19 Helpline <a href="tel:+911141236614">(+91 114 123 6614).</a>.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Plasma Donation counseling (End-to-End support):</strong> We have obtained a database of recently recovered COVID patients from the Delhi government, and currently have a team of volunteers providing counseling services to these people on how to donate, and making sure each donor has a safe and sanitized free ride to the nearest donation center. We are also able to provide plasma donation support to any eligible donor pan-India who reaches our COVID-19 Helpline <a href="tel:+911141236614">(+91 114 123 6614).</a>
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Doctors in Diaspora:</strong> With the help of some dedicated volunteers from abroad, we have been able to collect a database of 70+ registered doctors, nurses, and therapists living outside India who have volunteered their time to consult virtually with Indian patients in their homes, and assist Indian medical professionals working in quarantine centers and makeshift hospitals.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Corporate Support:</strong> We are willing to mobilize our knowledge and core of virtual volunteers to assist companies looking to assist their people in these tough times. We are able to assist with plasma donation support, training an internal employee on how to run a company-wide vaccination drive, and connecting COVID-affected employees with Doctors in Diaspora.
            </Typography>
          </li>
        </ul>
      </Paper>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5">Projects in Pipeline</Typography>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{ backgroundColor: '#e8e8e8de' }}>
        <Typography variant="body1" align="justify">
          Expansion of current work to underserved regions in India: Fortunately, the international community has mobilized over the past few weeks to support India. Unfortunately, most of the attention  has been focused on metropolitan areas and many smaller cities, though in dire need, receive little fundraising support. We are currently in talks with grassroots organizers in Khandwa District, Madhya Pradesh and Faizabad, Uttar Pradesh to expand our operations to these underserved areas. 
        </Typography>
        <Spacer />
        <ul>
          <li><Typography variant="body1" align="justify">Fully equipped ambulances to ensure patients are able to reach hospitals for a timely treatment.</Typography></li>
          <li><Typography variant="body1" align="justify">Vaccination drive in Delhi slums</Typography></li>
          <li><Typography variant="body1" align="justify">Mental Health support for caregivers</Typography></li>
          <li><Typography variant="body1" align="justify">Food and accommodation for paramedics placed in Govt. hospitals</Typography></li>
        </ul>
        <Typography variant="body1">If you are interested in supporting any of our (current or in-pipeline) initiative/s, please reach <a href="mailto:lindsay.tycia@gmail.com">lindsay.tycia@gmail.com</a> to partner with us. </Typography>
      </Paper>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5">Donations</Typography>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{ backgroundColor: '#e8e8e8de' }}>
        <Typography variant="body1">
          <a href="https://milaap.org/fundraisers/support-covid-relief-work#">Indian Donors</a>
        </Typography>
        <Typography variant="body1">
          <a href="https://fundly.com/covid-relief-to-save-lives-in-india">
            International Donors
          </a>
        </Typography>
      </Paper>
      <OurImpact />
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5">Our Work in 2020</Typography>
      </Paper>
      <Paper elevation={0} className={classes.container} style={{ backgroundColor: '#e8e8e8de' }}>
        <Typography variant="body1">
          India Against Corona was set up in responses to the crisis India faced during the first wave of Covid-19 in 2020. We distributed more than 20Lakh meals worth of ration to 30,000+ families that time. We also helped arrange transport for the stranded migrants to reach their home towns and villages.
        </Typography>
        <Spacer />
        <Link href="/iac1">
          <Button size="large" variant="outlined">Know more about IAC1.0</Button>
        </Link>
      </Paper> 
      </>
    );
  }
};

export default withStyles(styles, { withTheme: true })(SmallDescription);