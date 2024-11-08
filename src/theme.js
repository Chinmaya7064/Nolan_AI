import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: {main: '#191b1f'}
  },
});

export default theme;  // Ensure this line is included to export the theme as default
