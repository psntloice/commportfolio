import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

// Define a function to get design tokens based on the mode
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      light: mode === 'dark' ? '#FFFFFF' : '#9cfcdf',
      main: mode === 'dark' ? '#CCCCCC' : '#0c7a54',
      dark: mode === 'dark' ? '#999999' : '#3c8f59',
      contrastText: '#...', // Add your contrast text color here
    },
    // Add other palette options as needed
  },
});

// Define your custom theme using the getDesignTokens function
const theme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));

export default theme;