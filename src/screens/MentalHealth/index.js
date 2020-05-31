import React, { Component } from 'react'
import { Typography, Grid, Box, List, ListItem, Button } from '@material-ui/core';
import NavBar from '../LandingPage/components/NavBar';
import { CSSTransition } from 'react-transition-group';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';


const HeaderText = () => (
    <CSSTransition
        in={true}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        appear
    >
        <Box style={{ borderRadius: '0 10px', textAlign: 'center', background: '#d4ffdf' }}>
            <Typography variant="h2">It’s a difficult time.</Typography>
        </Box>
    </CSSTransition>
)

const MiddleText = () => (
    <CSSTransition
        in={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
        appear
    >
        <Box style={{ borderRadius: '10px 0', background: '#dbfffb' }}>
            <Typography variant="h5" style={{ paddingLeft: '20px' }}>The outbreak of COVID-19 pandemic has made many people feel anxious and distressed.</Typography>
        </Box>
    </CSSTransition>
)

const Paragraph = () => (
    <CSSTransition
        in={true}
        timeout={5000}
        classNames="fade"
        unmountOnExit
        appear
    >
        <Box style={{background:'#e5d6ff', borderRadius:'0 20px 20px 20px', padding: '20px 0 20px 20px'}}>
            <Typography variant="h4">Are you?</Typography>
            <List>
                <ListItem>
                    <SubdirectoryArrowRightIcon />
                    <Typography variant="h6" style={{fontSize:'18px'}}>
                        <em>fearful</em> of losing livelihood due to isolation, social distancing, home quarantine, and restriction on travel?
                    </Typography>
                </ListItem>
                <ListItem>
                    <SubdirectoryArrowRightIcon />                
                    <Typography variant="h6" style={{fontSize:'18px'}}>
                        <em>stressed</em> due to shortage of essential items and a compulsive need to stock up food, essentials, and medical supplies?
                    </Typography>
                </ListItem>
                <ListItem>
                    <SubdirectoryArrowRightIcon />
                    <Typography variant="h6" style={{fontSize:'18px'}}>
                        <em>anxious</em> due to lack of contact with family members and friends living far away?
                    </Typography>
                </ListItem>
                <ListItem>
                    <SubdirectoryArrowRightIcon />
                    <Typography variant="h6" style={{fontSize:'18px'}}>
                        <em>worried</em> of becoming sick or losing one’s loved ones to the infection?
                    </Typography>
                </ListItem>
            </List>
        </Box>
    </CSSTransition>
)

const FooterText = () => {
    return(
        <CSSTransition
            in={true}
            timeout={10000}
            classNames="fade"
            unmountOnExit
            appear
        >
            <Box style={{borderRadius: '10px', textAlign:"center", background: "#cfd7e6", marginTop: '30px', padding: '15px'}}>
                <Typography variant="h6">Call our mental & emotional health helpline today at <Button style={{fontSize:'25px', color:'#224f79', fontWeight: '600'}} href="tel:011-411-82977">011-411-82977</Button></Typography>
            </Box>
        </CSSTransition>
    )
}

const Footer = () =>  {
    return(
        <Typography variant="body2" style={{paddingTop: '10px'}}>
            <em>*Run by 600+ trained volunteer counselors, with support from DCPCR and the Delhi Government.</em>
        </Typography>
    )
}

const MentalHealth = () => {
    return (
        <>
            <NavBar />
            <Box style={{display:'flex', flexDirection:'column', padding: '55px 0 0 0'}}>
                <Grid container>
                    <Grid item lg={7} />
                    <Grid item lg={5} md={12} sm={12}>
                        <HeaderText />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={8} md={12} sm={12}>
                        <MiddleText />
                    </Grid>
                    <Grid item lg={4} />
                </Grid>
                <Grid container>
                    <Grid item lg={1} md={1} sm={1}/>
                    <Grid item lg={10} md={10} sm={10}>
                        <Paragraph />
                    </Grid>
                    <Grid item lg={1} md={1} sm={1}/>
                </Grid>
                <Grid container>
                    <Grid item lg={2} md={1} sm={1}/>
                    <Grid item lg={8} md={10} sm={10}>
                        <FooterText />
                    </Grid>
                    <Grid item lg={2} md={1} sm={1}/>
                </Grid>
                <Grid container>
                    <Grid item lg={2} md={1} sm={1}/>
                    <Grid item lg={8} md={10} sm={10}>
                        <Footer />
                    </Grid>
                    <Grid item lg={2} md={1} sm={1}/>
                </Grid>
            </Box>
        </>
    )
}

export default MentalHealth;