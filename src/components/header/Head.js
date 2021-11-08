import { 
  Container,
  Box, 
  Grid, 
  Paper,
  Avatar,
  Typography
} from '@mui/material'

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme({
	typography: {
		h2: {
			color: 'white',
		}
	}
});

theme = responsiveFontSizes(theme);

export default function Head () {
	return (
		<Grid container spacing={2} sx={{ backgroundColor: 'white', padding:0 }}>
      <Grid item xs={4} sx={{ borderRadius : 0 }} marginTop={0}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: 'darkcyan', padding:0 }}>
					<Avatar
						alt="Haja Niaina"
						src='./test.png'
  					sx={{ width: '100%', height:'100%' }}
  					variant="square" //rounded
						/>
        </Box>
      </Grid>
      
      <Grid item xs={8} sx={{ borderRadius : 0 }} marginTop={1}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: 'darkcyan', padding:0 }}>      	
				
				<ThemeProvider theme={theme}>
					<Typography variant="h2">
        		Hajaniaina ANDRIANAVALONA
      		</Typography>
					<Typography variant="h3">
        		OSISOFT PI Administrator
      		</Typography>
					<p>Address: TOAMASINA, MADAGASCAR</p>
					<p>Open to position: </p>
					<p>Full Stack Web Developer (Flask-React)</p>
					<p>React Developer</p>
					<p>AI Developer (python-pytorch)</p>
					<div>Data Scientist (postgreSQL-python)</div>
				</ThemeProvider>
        </Box>
      </Grid>
		</Grid>
	);
}