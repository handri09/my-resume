import { styled } from '@mui/material/styles'
import { 
  Container,
  Box, 
  Grid, 
  Paper,
  Avatar,} from '@mui/material'
import Head from './Head'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius: 0,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Header() {
	return (
		<div className='header'>
        <Grid container spacing={2} >
        	<Head />


          <Grid item xs={6} sx={{ borderRadius : 0 }} marginTop={2}>
            <Item>
              <Box 
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'darkcyan',
                  padding:0
                }}>
              <p>Hello</p>
              </Box>
            </Item>
          </Grid>
        </Grid>

			<Citation />
		</div>
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
		</Grid>
	);
}

const Foot = () => {
	return (
		<Grid item xs={12} sx={{ borderRadius : 0,  }} marginTop={1}>
		</Grid>
	);
}