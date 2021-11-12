import './App.css';
import React, { Component, Fragment } from 'react'
//import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { styled } from '@mui/material/styles'
import { 
  Container, Box, Grid, Paper, Avatar, Divider, Stack, Chip
  } from '@mui/material'
import NavTabs from './components/muis/NavTabs'

import { Routes, Route, useParams } from 'react-router-dom'
import MiniDrawer from './components/muis/MiniDrawer'

class App extends Component {
  render () {
    return (
      <Container maxWidth='xxl' sx={{ bgcolor: 'white', height:'50%', textAlign: 'center', color:'white' }} >
        <NavTabs />
        <MiniDrawer />
        <Routes>
          <Route path='/my-resume/head' element={<Head />} />  
          <Route path='/my-resume/part' element={<Part />} />  
        </Routes>
      </Container>
    );
  }
}

export default App;

const Head = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: '#071a2f' }} marginTop={0}>
        <Stack  direction="row" marginLeft={2} divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={3}>
          <Avatar alt='logo' src='./favicon.ico' />
          <h2>Home</h2>
          <h2>Projects</h2>
          <h2>Resume</h2>
          <h2>Contact</h2>
        </Stack>
      </Grid>
    </Grid>
  );
}

const Part = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <Grid container spacing={0}>
          <Grid item xs={4} sx={{ borderRadius : 0, bgcolor: 'error.dark', height: 100 }} marginTop={0}>
            <h1>Part1</h1>
          </Grid>
          <Grid item xs={8} sx={{ borderRadius : 0, bgcolor: 'success.dark' }} marginTop={0}>  
            <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'white', color:'blue', height: '50%' }} marginTop={0}>
              <h2>Part21</h2>
            </Grid>
            <Grid item xs={12} sx={{ borderRadius : 0, bgcolor: 'primary.dark', height: '50%', textAlign: 'center' }} marginTop={0}>
              <h2>Part22</h2>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={4} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <h1>Part1</h1>
      </Grid>
      <Grid item xs={8} sx={{ borderRadius : 0, bgcolor: 'darkcyan' }} marginTop={0}>
        <h1>Part2</h1>
      </Grid>
    </Grid>
  );
}

//'#071a2f'
//'#001e3c'
//<Container maxWidth='xxl' sx={{ bgcolor: 'white', height:'50%', textAlign: 'center', color:'white' }} >