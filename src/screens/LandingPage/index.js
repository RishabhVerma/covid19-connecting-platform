import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


export class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Link to="/peopleInNeed">Hello</Link>
        <Typography variant="h2">Landing Page under Construction</Typography>
      </>
    );
  }
};

export default LandingPage;