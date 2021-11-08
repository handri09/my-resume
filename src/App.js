import React, { Component } from 'react'
import './App.css';
import Nav from './components/Nav'
import Header from './components/header/Header'
import { styled } from '@mui/material/styles'
import { 
  Container,
  Box, 
  Grid, 
  Paper,
  Avatar } from '@mui/material'
import Bar from './components/header/Bar'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class App extends Component {
  render () {
    return (
      <Container 
        maxWidth='xxl'
        sx={{ 
          bgcolor: 'success.dark',
          textAlign: 'center' }}>
          
        <Bar />
        
        <Header/>

      </Container>
    );
  }
}

export default App;