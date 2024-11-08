import React, { useState } from 'react';
import { Box, Paper, Stack, Typography, Button, Container } from '@mui/material';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import DialogBox from './DialogBox';
import BasicCard from './BasicCard';
import Sidebar from './Sidebar';
import Navbar from './Navbar'; 

function MainContent() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('');
  const [project, setProject] = useState(null); 

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (project) => {
    setProject(project); 
    setType(''); 
  };


  return (
    <>
      <Sidebar />
      <Navbar />
      <Box sx={{ flexGrow: 1, paddingLeft: 6 }}>
        <Stack spacing={2} sx={{ backgroundColor: '#b8bdcc', padding: 4 }}>
          <Stack direction="row" spacing={2}>
            <Paper sx={{ flex: 1, padding: 2, backgroundColor: '#dde0eb', color: '#000', borderRadius: 5 }}>
              <Typography variant="h6">Leave Feedback</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Help us make NolanAI even better!
              </Typography>
              <Button variant="outlined" color="primary">Take Survey</Button>
            </Paper>

            <Paper sx={{ flex: 1, padding: 2, backgroundColor: '#dde0eb', color: '#000', borderRadius: 5 }}>
              <Typography variant="h6">Join us on Discord!</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                Check out our Discord page to be a part of the NolanAI community
              </Typography>
              <Button variant="outlined" color="primary">Join group</Button>
            </Paper>
          </Stack>
        </Stack>

        <Stack>
          {/* Conditionally render project card or "Start New Project" section */}
          {project ? (
              <BasicCard title={project.title} type={project.type} description={project.description} />
          ) : (
            <Paper sx={{ padding: 4, backgroundColor: '#2b456b1f', color: '#000', textAlign: 'center', height: 180 }}>
              <Typography variant="h5" gutterBottom><strong>Start Your First Project</strong></Typography>
              <Typography variant="body2" sx={{ marginBottom: 3, fontSize: '18px' }}>
                Every great story begins with a first scene.
              </Typography>
              <Button variant="contained" color="primary" sx={{ width: '14rem', borderRadius: '20px', justifyContent: 'space-between' }} onClick={openDialog}>
                <AddCircleSharpIcon sx={{ color: '#fff',  }} />
                <span>Start New Project</span>
              </Button>
            </Paper>
          )}
        </Stack>

        <DialogBox openDialog={openDialog} closeDialog={closeDialog} handleChangeType={handleChangeType} open={open} type={type} onSubmit={handleSubmit} />
      </Box>
    </>
  );
}

export default MainContent;
