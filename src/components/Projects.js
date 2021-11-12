import React, { Component } from 'react';
import Card from './muis/Card'

import { 
  Container, Grid, Divider, Box, Paper, Avatar, Stack, Chip
  } from '@mui/material'

const datas = [{
	id: 'fjfds12',
	name : 'Haja'
},{
	id: 'fjfds18',
	name : 'Bada'
},{
	id: 'fjfds1422',
	name : 'Lanja'
},{
	id: 'fjfds1987968',
	name : 'Lova'
}]

class Projects extends Component {
	render() {
		return(
	    <Grid container spacing={1} sx={{}}>
	    	{datas.map((data) => (
	        <Grid xs={12} sm={6} lg={4} xl={3} sx={{ borderRadius : 0, width: '100%', height: '100%' }} padding={1}>
	          <Card />
	        </Grid>  
	    		))}
	    </Grid>
		);
	}
}

export default Projects;