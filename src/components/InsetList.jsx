import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CameraIcon from '@mui/icons-material/Camera';
import PhotoIcon from '@mui/icons-material/Photo';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';


export default function InsetList() {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',  }}
      aria-label="contacts"
    >
      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
          <ListItemIcon>
            <DriveFileRenameOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Screenplay" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
            <ListItemIcon>
                <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Breakdown" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
            <ListItemIcon>
                <ScheduleIcon />
            </ListItemIcon>
            <ListItemText  primary="Scheduling" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
            <ListItemIcon>
                <CameraIcon />
            </ListItemIcon>
          <ListItemText primary="Shot List" />
        </ListItemButton>
      </ListItem>
      
      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
            <ListItemIcon>
                <PhotoIcon />
            </ListItemIcon>
          <ListItemText primary="Storyboard" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding sx={{color: 'rgba(0, 0, 0, 0.88)', borderBottom: '.5px solid #2b456b1f', listStylePosition: 'inside', listStyleType: 'disc', }}>
        <ListItemButton>
            <ListItemIcon>
                <MovieCreationIcon />
            </ListItemIcon>
          <ListItemText primary="Deck" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
