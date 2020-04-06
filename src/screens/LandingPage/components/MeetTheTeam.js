import React from 'react';
import { withStyles, Paper, Typography, Avatar, Box } from '@material-ui/core';

import Spacer from '../../../components/Spacer';
import MohitImage from '../../../assets/img/team/mohit.jpg';
import RohitImage from '../../../assets/img/team/rohit.jpg';

const styles = theme => ({
  container: {
    padding: theme.spacing(2),
  },
  memberTile: {
    display: 'flex',
    flexDirection: 'row',
  },
  memberPhoto: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(2),
  },
  memberDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

const TEAM = [
  {
    id: 1,
    name: 'Mohit Raj',
    title: 'Founder, TYCIA',
    img: MohitImage
  },
  {
    id: 2,
    name: 'Rohit Raj',
    title: 'Sr. Manager, SIA Power Development Platform',
    img: RohitImage,
  },
  {
    id: 3,
    name: 'Ishita Roy',
    title: 'Project Manager, Outlook RT',
    initials: 'IR',
  },
  {
    id: 4,
    name: 'Rishabh Verma',
    title: 'Co-Founder, NavGurukul',
    initials: 'RV',
  }
];

class MeetTheTeam extends React.Component {
  renderMember(member) {
    const { classes, theme } = this.props;
    return (
      <Box key={member.id}>
        <Box className={classes.memberTile}>
          { member.img !== undefined ? (
            <Avatar src={member.img} className={classes.memberPhoto} alt={member.name} />
          ) : (
            <Avatar className={classes.memberPhoto} alt={member.name}>{member.initials}</Avatar>
          ) }
          <Box className={classes.memberDetailsContainer}>
            <Typography variant="body1" style={{ fontWeight: 'bold' }}>{member.name}</Typography>
            <Typography variant="body2">{member.title}</Typography>
          </Box>
        </Box>
        <Spacer height={theme.spacing(2)} />
      </Box>
    );
  }

  render() {
    const { classes, theme } = this.props;
    return (
      <Paper elevation={0} className={classes.container}>
        <Typography variant="h5" component="h2">{'MEET THE TEAM.'}</Typography>
        <Spacer height={theme.spacing(2)} />
        { TEAM.map(member => this.renderMember(member)) }
      </Paper>
    );
  }
};

export default withStyles(styles, { withTheme: true })(MeetTheTeam);