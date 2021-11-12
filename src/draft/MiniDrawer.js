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

import { 
  Container, Grid, Paper, Avatar, Stack, Chip
  } from '@mui/material'

import { Routes, Route, useParams } from 'react-router-dom'

const drawerWidth = 180;

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

  return (
    <Box sx={{ display: 'flex', bgcolor:'#001e3c' }}>
      <CssBaseline sx={{ bgcolor:'error.dark' }}/>
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

      <Drawer variant="permanent" open={open} sx={{ bgcolor:'cyan', textAlign: 'center', margin: 0}}>
        <DrawerHeader sx={{ bgcolor:'secondary.dark'}}>
          <IconButton onClick={handleDrawerClose} sx={{color:'white'}}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List sx={{ bgcolor:'#071a2f', color:'white' }}>
          {['Home', 'Resume', 'Projects', 'Contact'].map((text, index) => (
            <ListItem button component={Link} to={'/my-resume/'+text} onClick={() => console.log(text)} key={text} >
              <ListItemIcon>
                { text === 'Home' ? <InboxIcon color='primary' /> : <MailIcon color='primary' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p:3, bgcolor: '#071a2f', margin:10,  }}>
        <DrawerHeader sx={{ bgcolor: 'primary.dark' }}/>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
        </Typography>

        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris.
        </Typography>

        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris.
        </Typography>

        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris.
        </Typography>
        <Routes>
          <Route path='/my-resume/home' element={<Head />} />  
          <Route path='/my-resume/Resume' element={<Part />} />  
        </Routes>
      </Box>
    </Box>
  );
}

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