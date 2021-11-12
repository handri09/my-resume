import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom'
import { 
  Avatar,
  } from '@mui/material'

function LinkTab(props) {
  console.log(props.label)
  return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault()
        }}
        {...props}
      />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" >
        <LinkTab label="home" href="/trash" />
        <LinkTab label="resume" href="/spam" />
        <LinkTab label="projects" href="/spam" />
        <LinkTab label="contact" href="/spam" />
      </Tabs>
    </Box>
  );
}