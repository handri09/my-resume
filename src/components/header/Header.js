import { styled } from '@mui/material/styles'
import { 
  Container,
  Box, 
  Grid, 
  Paper,
  Avatar,
  Typography
} from '@mui/material'
import Head from './Head'



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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header() {
	return (
    <Grid container spacing={1} >
    
    </Grid>
	);
}

const Citation = () => {
	return (
		<div> 
			<p>The more you learn, the more you earn. Warren B.</p>
		</div>
	);
}

const Body = () => {
	return (
		<Grid item xs={12} sx={{ borderRadius : 0 }} marginTop={1}>
      <Box 
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          padding:0
        }}>

      <h1>CONTENT</h1>
      
      </Box>
		</Grid>
	);
}

const Foot = () => {
	return (
    <Grid item xs={12} sx={{ borderRadius : 0, backgroundColor: '#0072e6' }} marginTop={1}>
    	<Grid container spacing={1} >
    		<Grid item xs={4} sx={{ borderRadius : 0, backgroundColor: 'error.dark' }} marginTop={1}>
	  			<Avatar
						alt="Haja Niaina"
						src='./test.png'
						sx={{ width: '100%', height:'100%' }}
						variant="square" //rounded
						/>
    		</Grid>
    		
    		<Grid item xs={8} sx={{ borderRadius : 0, backgroundColor: '#0072e6' }} marginTop={1}>				
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

    		</Grid>
	    </Grid>
    </Grid>
	);
}

const Headi = () => {
	return (
    <Grid item xs={12} sx={{ borderRadius : 0 }} marginTop={1}>
      <Box 
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#0072e6',
          padding:0
        }}>
     	<Citation />
      </Box>

      <Grid item xs={12} sx={{ borderRadius : 0, backgroundColor: 'secondary.dark' }} marginTop={0}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: '#0072e6', padding:0 }}>
					<Avatar
						alt="Haja Niaina"
						src='./bgv3.jpg'
  					sx={{ width: '100%', height:'100%' }}
  					variant="square" //rounded
						/>
        </Box>
        <h1>TEST BE</h1>
      </Grid>

    </Grid>
	);
}