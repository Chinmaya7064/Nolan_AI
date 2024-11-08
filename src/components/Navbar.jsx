import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Container , Box } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { useAuth0 } from "@auth0/auth0-react";
import AccountDemoSignedIn from './AccountDemoSignedIn'; 

import DialogBox from './DialogBox';


function Navbar() {
    const [alignment, setAlignment] = React.useState('project')
    const [bgcolor, setbgColor] = React.useState('project')
    const [open, setOpen] = React.useState(false)
    const [type, setType] = React.useState('');
        

    const handleChange = (event, newAlignment, bgColor) => {
        setAlignment(newAlignment);
        setbgColor(event.target.backgroundColor)
    };

    const openDialog = () => {
      setOpen(true)
    }

    const closeDialog = () => {
        setOpen(false)
    };

    const handleChangeType = (event) => {
      setType(event.target.value);
    };

    const { logout } = useAuth0();

  return (
    <>
      <AppBar position="static" sx={{backgroundColor: '#3f68a430', color: '#000', boxShadow: 'none', paddingLeft: 6}}>
        <Toolbar sx={{paddingRight: 6,}}>
          <Typography variant="h6" sx={{ flexGrow: 1, }}>NOLAN</Typography>
            <Button color="primary" variant="contained" sx={{marginRight: '8px', width: '14rem', justifyContent: 'space-between', borderRadius: '20px'}} onClick={openDialog} > 
              <AddCircleSharpIcon sx={{color: '#fff', }} />           
              <span>Start new project</span> 
            </Button>
            <AccountDemoSignedIn />
        </Toolbar>

        <Toolbar sx={{backgroundColor: '#CDD6DF'}}>
          <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              >
              <ToggleButton value="project" sx={{backgroundColor: '#fff', color: '#000', borderRadius: '50px'}}>My Projects</ToggleButton>
              <ToggleButton value="share" sx={{backgroundColor: '#fff', color: '#000', borderRadius: '50px'}}>Shared with me</ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>

    <DialogBox openDialog={openDialog} closeDialog={closeDialog} handleChangeType={handleChangeType} open={open} type={type}  />
    </>
  );
}
export default Navbar;
