import React from 'react';
import { withStyles, Paper, Typography, Avatar, Box, Grid } from '@material-ui/core';
import { shuffle } from 'underscore';

import Spacer from '../../../components/Spacer';

import MohitImage from '../../../assets/img/team/mohit.jpg';
import RohitImage from '../../../assets/img/team/rohit.jpg';
import GauriImage from '../../../assets/img/team/gauri.jpg';
import JessieImage from '../../../assets/img/team/jessie.jpg';
import SanchiImage from '../../../assets/img/team/sanchi.jpg';
import ShobhitImage from '../../../assets/img/team/shobhit.jpg';
import TabishImage from '../../../assets/img/team/tabish.jpg';
import GhufranImage from '../../../assets/img/team/ghufran.jpg';
import JatinImage from '../../../assets/img/team/jatin.jpg';


const styles = theme => ({
  container: {
    padding: theme.spacing(2),
  },
  memberTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  memberPhoto: {
    width: 200,
    height: 200,
    marginRight: theme.spacing(2),
  },
  memberDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  }
});

const TEAM = [
  {
    id: 6,
    name: 'Mohit',
    title: 'Co-founder',
    org: 'TYCIA',
    img: MohitImage,
    bgColor: '#fff',
    bio: 'An ex-Clinton fellow and a Jamia alum, co-founded TYCIA whilst working on child rights of migrant workers based in Delhi. Mohit is juggling between Project Management and Fundraising and on-ground help in IAC.',
  },
  {
    id: 1,
    name: 'Sanchi',
    title: 'Co-founder',
    org: 'TYCIA',
    img: SanchiImage,
    bgColor: '#e8e8e8de',
    bio: 'An entrepreneur, a crusader of gender equality with IAC, Saanchi is managing resources.',
  },
  {
    id: 2,
    name: 'Rohit',
    title: 'Sr. Manager',
    org: 'Asia PD Program',
    img: RohitImage,
    bgColor: '#fff',
    bio: 'An IIT-G and IIM-Cal alum, he is a manager at renewable energy investment firm by day & supports the fundraising and partnerships team by night for IAC.'
  },

  {
    id: 3,
    name: 'Jessie',
    title: 'Clinton Fellow',
    org: 'AIF India',
    img: JessieImage,
    bgColor: '#e8e8e8de',
    bio: 'UCLA alum, she is working on an education campaign for tribal girls in Satpura, MP. Jessie is lending her marketing and communication skills for IAC.'
  },
  {
    id: 4,
    name: 'Tabish',
    title: 'Program Manager',
    org: '360Plus Foundation',
    img: TabishImage,
    bgColor: '#fff',
    bio: 'Jamia alum, Tabish did his Second Chance Fellowship with incarcerated youth. He is coordinating our on-ground volunteers at IAC.'
  },
  {
    id: 5,
    name: 'Ghufran',
    title: 'Founder',
    org: 'Awadh People Forum',
    img: GhufranImage,
    bgColor: '#e8e8e8de',
    bio: 'Backbone of all operations at IAC, he is a veteran at running grassroot movements and initiatives with experience spanning 20+ years!'
  },
  {
    id: 7,
    name: 'Gauri',
    title: 'Second Chance Fellow',
    org: 'Project Second Chance',
    img: GauriImage,
    bgColor: '#fff',
    bio: 'A TISS graduate with her Phd thesis in rehabilitation of prisoners at DSSW. Gauri’s help in research and report writing with a team of volunteers in appreciated.'
  },
  {
    id: 8,
    name: 'Shobhit',
    title: 'Intern',
    org: 'MasterCard India',
    img: ShobhitImage,
    bgColor: '#e8e8e8de',
    bio: 'After SRCC and IIM-L, we are very grateful for his analytical skills handling all backend data management at IAC.',
  },
  {
    id: 9,
    name: 'Jatin Babbar',
    title: 'Chief Volunteer Coordinator',
    org: 'MasterCard India',
    img: JatinImage,
    bgColor: '#fff',
    bio: 'Jamia alum, Ex-TATA Trust Fellow ZSBP and running its own Technology Startup. Contributing as volunteer at IAC by  coordinating with enablers and vendors to ensure proper deliver of ration kits to beneficiaries.',
  }
];

class MeetTheTeam extends React.Component {
  renderMember(member, index) {
    const { classes } = this.props;
    const bgColor = index % 2 == 0 ? '#e8e8e8de' : '#fff';
    return (
      <Grid item xs={12} md={6} lg={4} style={{ backgroundColor: bgColor, borderBottom: '1px solid #bdbdbd', }} key={member.id}>
        <Box className={classes.memberTile}>
          { member.img !== undefined ? (
            <Avatar src={member.img} className={classes.memberPhoto} alt={member.name} />
          ) : (
            <Avatar className={classes.memberPhoto} alt={member.name}>{member.initials}</Avatar>
          ) }
          <Box className={classes.memberDetailsContainer}>
            <Typography variant="body1" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{member.name}</Typography>
            <Typography variant="body2"><strong>{member.title}</strong></Typography>
            <Typography variant="body2">{member.org}</Typography>
          </Box>
          <Box className={classes.memberDetailsContainer}>
            <Typography variant="body2">{member.bio}</Typography>
          </Box>
        </Box>
      </Grid>
    );
  }

  render() {
    const { classes, theme } = this.props;
    const team = shuffle(TEAM);
    return (
      <>
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2" style={{ fontWeight: 600 }}>{'MEET THE TEAM.'}</Typography>
        <Spacer height={theme.spacing(2)} />
      </Paper>
      <Grid container>
        { team.map((member, index) => this.renderMember(member, index)) }
      </Grid>
      </>
    );
  }
};

export default withStyles(styles, { withTheme: true })(MeetTheTeam);