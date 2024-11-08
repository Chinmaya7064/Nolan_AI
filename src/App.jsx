import React from 'react';
import {  Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MainContent from './components/MainContent';
import HomePage from './components/HomePage'; // Import your Homepage component
import CardDetails from './components/CardDetails'
import Chat from './components/Chat';

function App() {

  return (
      <Router>    
          <Stack sx={{ flexGrow: 1, flexDirection: 'column' }}>            
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/dashboard"
                  element={ <MainContent /> }
                />
                <Route path='/carddetails' element={<CardDetails />} />
                <Route path='/script' element={<Chat />} />
              </Routes>
          </Stack>
      </Router>

  );
}

export default App;
