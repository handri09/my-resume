import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav'
import Header from './components/header/Header'
import Bar from './components/header/Bar'
import { styled } from '@mui/material/styles'
import { 
  Container, Box, Grid, Paper, Avatar, Divider, Stack, Chip
  } from '@mui/material'

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const content = (
  <div>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
    Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
    Sed malesuada lobortis pretium.`}
  </div>
);

class App extends Component {
  render () {
    return (
      <Container maxWidth='xxl' sx={{ bgcolor: '#001e3c', textAlign: 'center', color:'white' }} >
        <Grid container spacing={0}>
          
          <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: '#071a2f' }} marginTop={0}>
            <Stack  direction="row" marginLeft={2} 
                    divider={<Divider orientation="vertical" flexItem color='white'/>}
                    spacing={3}>
              <h2>home</h2>
              <h2>resume</h2>
              <h2>projects</h2>
              <h2>contact</h2>
            </Stack>
          </Grid>

        <Root>
          {content}
            <Divider color='white'>LOZA </Divider>

            <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'error.dark' }} marginTop={0}>
              <Grid container spacing={0} marginTop={2}>
                <Grid item xs={4} sx={{ borderRadius : 0, bgcolor: 'white' }} marginTop={0}>
                  <p>1</p>
                </Grid>          
                <Grid item xs={8} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
                  <p>2</p>
                </Grid>       
              </Grid>
              <h1>Body</h1>
            </Grid>

            <Divider color='white'/>      
            {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}
          </Root>

          <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'success.dark', color:'white' }} marginTop={0}>
            <h1>Foot</h1>
          </Grid>
        
        </Grid>
      </Container>
    );
  }
}

export default App;

//'#071a2f'