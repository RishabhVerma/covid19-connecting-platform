import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core';
import NavBar from '../LandingPage/components/NavBar'


import CloudOffIcon from '@material-ui/icons/CloudOff';

const MentalHealth = () => {
    return (
        <>
            <Grid>
                <Grid container justify="center" alignItems="center">
                    <NavBar />
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <CloudOffIcon style={{paddingTop: '60px',fontSize: '100px'}}/>
                </Grid>
                <Grid container justify="center" alignItems="center">
                    <Typography style={{paddingBottom:'20px', fontSize: '30px'}}>Coming Soon</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default MentalHealth