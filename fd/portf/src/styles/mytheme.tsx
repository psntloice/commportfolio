import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';


export const brand = {
  50: '#192919',
  100: '#cefded',
  200: '#9cfcdf',
  300: '#3d9633',
  400: '#0c7a54',
  500: '#09aa62',
  600: '#52a87d',
  700: '#0c7a54',
  800: '#3c8f59',
  900: '#021F3B',
};
export const secondary = {
  50: '#F9F0FF',
  100: '#E9CEFD',
  200: '#D49CFC',
  300: '#B355F6',
  400: '#750AC2',
  500: '#6709AA',
  600: '#490679',
  700: '#3B0363',
  800: '#2F024F',
  900: '#23023B',
};
export const green = {
  50: '#F6FEF6',
  100: '#E3FBE3',
  200: '#C7F7C7',
  300: '#A1E8A1',
  400: '#51BC51',
  500: '#1F7A1F',
  600: '#136C13',
  700: '#0A470A',
  800: '#042F04',
  900: '#021D02',
};
export const gray = {
  50: '#FBFCFE',
  100: '#EAF0F5',
  200: '#D6E2EB',
  300: '#BFCCD9',
  400: '#94A6B8',
  500: '#5B6B7C',
  600: '#4C5967',
  700: '#364049',
  800: '#131B20',
  900: '#090E10',
};
// Define a function to get design tokens based on the mode
const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    primary: {
      light: brand[200],
      main: brand[500],
      dark: brand[800],
      backgbox: '#cef5ce',
      backg: 'white.900',
      contrastText: brand[50],
      ...(mode === 'dark' && {
        contrastText: brand[100],
        light: brand[300],
        main: brand[400],
        dark: brand[800],
        backgbox: '#293629',
        backg: 'grey.900',
      }),
    },
    // primary: {
    //   light: mode === 'dark' ? '#FFFFFF' : '#9cfcdf',
    //   main: mode === 'dark' ? '#CCCCCC' : '#0c7a54',
    //   dark: mode === 'dark' ? '#999999' : '#3c8f59',
    //   contrastText: '#...', // Add your contrast text color here
    // },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[800],
      ...(mode === 'dark' && {
        light: secondary[400],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    warning: {
      main: '#F7B538',
      dark: '#F79F00',
      ...(mode === 'dark' && { main: '#F7B538', dark: '#F79F00' }),
    },
    // error: {
    //   light: red[50],
    //   main: red[500],
    //   dark: red[700],
    //   ...(mode === 'dark' && { light: '#D32F2F', main: '#D32F2F', dark: '#B22A2A' }),
    // },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
      ...(mode === 'dark' && {
        light: green[400],
        main: green[500],
        dark: green[700],
      }),
    },
    divider: mode === 'dark' ? alpha(gray[600], 0.3) : alpha('#598759', 0.5),
    background: {
      default: '#fff',
      paper: gray[50],
      ...(mode === 'dark' && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      dark: '#192919',
      ...(mode === 'dark' && { primary: '#fff', secondary: gray[400], dark: '#e6ebe6' }),
    },
    action: {
      selected: `${alpha(brand[200], 0.2)}`,
      ...(mode === 'dark' && {
        selected: alpha(brand[800], 0.2),
      }),
    },
    
    // Add other palette options as needed
  },
  typography: {
    fontFamily: ['"Inter", "sans-serif"'].join(','),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
});

// Define your custom theme using the getDesignTokens function
const theme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));

export default theme;