import React, { useState } from 'react';
import { Container, Drawer, List, Popover } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InsetList from './InsetList';

function Sidebar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the button as the anchor element
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Drawer variant="permanent">
        <List sx={{ margin: 0, backgroundColor: '#3f68a420', width: 60, height: '100%', cursor: 'pointer' }}>
          <Container
            onClick={handleOpen} 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1d6ee31f',
              width: '40px',
              height: '40px',
              borderRadius: '6px',
            }}
          >
            <AddCircleOutlineIcon sx={{ color: '#1a1d2470' }} />
          </Container>
        </List>
      </Drawer>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <InsetList />
      </Popover>
    </>
  );
}

export default Sidebar;
