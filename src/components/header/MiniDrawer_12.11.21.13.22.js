import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import { createSvgIcon } from '@mui/material/utils';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import NoteIcon from '@mui/icons-material/Note';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

import Header from '../header/Head'
import Projects from '../Projects'


import { 
  Container, Grid, Paper, Avatar, Stack, Chip
  } from '@mui/material'

import { Routes, Route, useParams } from 'react-router-dom'

const drawerWidth = 180;

const HomeIcon = createSvgIcon(
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
  'Home',
);


const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const active = 'fvdvfvd'

  return (
    <Box sx={{ display: 'flex', bgcolor:'white' }}>
      <CssBaseline/>
      <AppBar position="fixed" open={open} sx={{ bgcolor: '#071a2f' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open} sx={{ textAlign: 'center', margin: 0}}>
        <DrawerHeader sx={{ bgcolor:'#071a2f'}}>
          <IconButton onClick={handleDrawerClose} sx={{color:'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ bgcolor:'#071a2f', color:'white' }}>
          {['Home', 'Resume', 'Projects', 'Contact'].map((text, index) => (
            <ListItem button component={Link} to={'/my-resume/'+text} onClick={() => {
              console.log(active)
            }} key={text} >
              <ListItemIcon>
                { text === 'Homed' && <HomeIcon color='primary' sx={{ fontSize: 30 }} />}
                { text === 'Home' && <HomeOutlinedIcon color='primary' sx={{ fontSize: 30 }} />}
                { text === 'Resume' && <NoteOutlinedIcon color='primary' sx={{ fontSize: 30 }} />}
                { text === 'Projects' && <AccountTreeOutlinedIcon color='primary' sx={{ fontSize: 30 }} />}
                { text === 'Contact' && <ContactPhoneOutlinedIcon color='primary' sx={{ fontSize: 30 }} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p:0.7, bgcolor: 'white', marginTop:'1.5%'  }}>
        <Routes>
          <Route path='/my-resume/Home' element={<Head />} />
          <Route path='/my-resume/Projects' element={<Projects />} />  
          <Route path='/my-resume/Resume' element={<Part />} />  
          <Route path='/my-resume/Contact' element={<Header />} /> 
        </Routes>
      </Box>

    </Box>
  );
}

const Head = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={5} sx={{ borderRadius : 0, bgcolor: '#071a2f' }} marginTop={0}>
        <Stack  direction="column" marginLeft={0} divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={3}>  
          <Avatar
            alt="Haja Niaina"
            src='./test.png'
            sx={{ width: '100%', height:'100%' }}
            variant="square" //rounded
            />
          <h1>Haja Andria.</h1>  
        </Stack>
      </Grid>      

      <Grid item xs={7} sx={{ borderRadius : 0, bgcolor: '#071a2f' }} marginTop={0}>
        <Stack  direction="row" marginLeft={2} divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={3}>
          <Avatar alt='logo' src='./favicon.ico' variant='rounded' sx={{ width: 120, height: 100 }} />
          <Avatar alt='logo' src='./osisoft.jpg' variant='rounded' sx={{ width: 120, height: 100 }}/>
          <Avatar alt='logo' src='./python.jpg' variant='rounded' sx={{ width: 100, height: 100 }}/>
          <Avatar alt='logo' src='./flask.png' variant='rounded' sx={{ width: 250, height: 100 }}/>
          <Avatar alt='logo' src='./native.jpg' variant='rounded' sx={{ width: 100, height: 100 }}/>
          <Avatar alt='logo' src='./redux1.jpg' variant='rounded' sx={{ width: 100, height: 100 }}/>
        </Stack>
        <Stack  direction="column" marginLeft={2} divider={<Divider orientation="vertical" flexItem color='white'/>} spacing={3}>
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
