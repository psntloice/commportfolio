import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      // Change the shades of blue to your custom color
      light: '#9cfcdf', // Light shade of your custom color
      main: '#0c7a54',  // Main shade of your custom color
      dark: '#3c8f59',  // Dark shade of your custom color
      contrastText: '#...', // Text color that contrasts with your custom color
    },
    // You can also customize other palette colors such as secondary, error, etc.
  },
});

export default theme;

