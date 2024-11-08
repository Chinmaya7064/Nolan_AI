import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Stack, TextField, IconButton, Container, Box, InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import { useState } from 'react';

function DialogBox(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ title: false, type: false, description: false });

  const validateForm = () => {
    const newErrors = {
      title: !title.trim(),
      type: !props.type.trim(),
      description: !description.trim(),
    };
    setErrors(newErrors);
    return !newErrors.title && !newErrors.type && !newErrors.description;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Pass the form data back to MainContent and close the dialog if all fields are valid
      props.onSubmit({ title, type: props.type, description });
      props.closeDialog();
    }
  };

  return (
    <Dialog open={props.open} onClose={props.closeDialog} fullWidth aria-labelledby='dialog-title'>
      <DialogTitle id='dialog-title' sx={{ padding: '6px 14px', backgroundColor: '#e9ebf2', borderBottom: '1px solid #2b456b1f' }}>
        <strong>Create a new project</strong>
        <IconButton style={{ float: 'right' }} onClick={props.closeDialog}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Container style={{ color: 'rgba(0, 0, 0, 0.88)', padding: '6px 14px', backgroundColor: '#e9ebf2' }}>
        Let's start your project by giving it a memorable title.
      </Container>

      <DialogContent sx={{ backgroundColor: '#e9ebf2' }}>
        <Stack spacing={2} margin={2}>
          <TextField
            variant='outlined'
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            error={errors.title}
            helperText={errors.title ? 'Title is required' : ''}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth error={errors.type}>
              <InputLabel id="type-select-label">Type</InputLabel>
              <Select
                labelId="type-select-label"
                id="type-select"
                value={props.type}
                label="Type"
                onChange={props.handleChangeType}
              >
                <MenuItem value="Feature Film">Feature Film</MenuItem>
                <MenuItem value="TV Show">TV Show</MenuItem>
                <MenuItem value="Social Media">Social Media</MenuItem>
              </Select>
              {errors.type && <FormHelperText>Type is required</FormHelperText>}
            </FormControl>
          </Box>
          <TextField
            variant='outlined'
            label='Description'
            multiline
            rows={1}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={errors.description}
            helperText={errors.description ? 'Description is required' : ''}
          />
        </Stack>
      </DialogContent>

      <DialogActions sx={{ backgroundColor: '#e9ebf2', padding: '14px 16px' }}>
        <Button variant='contained' color='error' onClick={props.closeDialog}>Cancel</Button>
        <Button variant='contained' onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;