// // import * as React from 'react';
// import React, { useState } from 'react';
// import CssBaseline from '@mui/material/CssBaseline';


// //// work items
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';

// ///// components
// import AppAppBar from '../components/AppAppBar';
// import Hero from '../components/Hero';
// import Highlights from '../components/Highlights';
// import Pricing from '../components/Pricing';
// import Features from '../components/Features';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';

// //theme
// import myTheme from './mytheme';
// import { ThemeProvider } from '@mui/material/styles';

// import getLPTheme from './getLPTheme';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { PaletteMode } from '@mui/material';

// const defaultTheme = createTheme({});

// interface ToggleCustomThemeProps {
//   showCustomTheme: Boolean;
//   toggleCustomTheme: () => void;
// }

// function ToggleCustomTheme({
//   showCustomTheme,
//   toggleCustomTheme,
// }: ToggleCustomThemeProps) {
//   return (
//   //  {/* button with dark and light */}
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100dvw',
//         position: 'fixed',
//         bottom: 24,
//       }}
//     >
      
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: 'background.default',
//           '& .Mui-selected': {
//             pointerEvents: 'none',
//           },
//         }}
//       >
//         <ToggleButton value>
//         <DarkModeIcon sx={{ fontSize: '20px', mr: 1 }}/>
//           Dark
//         </ToggleButton>
//         <ToggleButton value={false}>
          
//           <LightModeIcon sx={{ fontSize: '20px', mr: 1 }} />
//           Light
//         </ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

// export default function LandingPage() {
//   const [mode, setMode] = React.useState<PaletteMode>('dark');
//   // const mode: PaletteMode = 'dark';
//   // const [mode, setMode] = useState<PaletteMode>('dark');
//   const [showCustomTheme, setShowCustomTheme] = React.useState(true);
//   // const [showCustomTheme, setShowCustomTheme] = useState(true);

//   const LPtheme = createTheme(getLPTheme(mode));

//   const toggleColorMode = () => {
//     setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   const toggleCustomTheme = () => {
//     setShowCustomTheme((prev) => !prev);
//   };

//   return (
//     <ThemeProvider theme={myTheme}>
//     {/* // <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}> */}
//     <CssBaseline />
//       <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      
//       <Box sx={{ bgcolor: 'background.default' }}>
//       <Hero />
//       <Divider />
//         <Features />
//         <Divider />
     
//         <Highlights />
//         <Divider />
//         <Pricing />
//         <Divider />
//         <FAQ />
//         <Divider />
//         <Footer />
//       </Box>
//       <ToggleCustomTheme
//         showCustomTheme={showCustomTheme}
//         toggleCustomTheme={toggleCustomTheme}
//       />
//     </ThemeProvider>
//   );
// }
import { ReactNode } from 'react';
import React, { useState, createContext, useContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ProjectCard from 'components/Projects';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider } from '@mui/material/styles';
import mytheme from '../styles/mytheme';
import { PaletteMode } from '@mui/material';

// Define the type for theme context
interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Define a context for managing the theme
const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to easily access the theme context
const useTheme = () => useContext(ThemeContext);

// Define your LandingPage component
const LandingPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeProvider theme={mytheme(darkMode ? 'dark' : 'light')}>
            <CssBaseline />
      {/* <AppAppBar darkMode={darkMode} /> */}
      <AppAppBar darkMode={false} toggleColorMode={toggleDarkMode} />
      {/* <AppAppBar mode={darkMode} toggleColorMode={toggleColorMode} /> */}
      <Box sx={{ bgcolor: 'background.default' }}>
        <Hero />
        <Divider />
        <ProjectCard />
        <Divider />
        <Features />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      <CustomThemeProvider darkMode={darkMode}>
        <ToggleCustomTheme toggleDarkMode={toggleDarkMode} />
      </CustomThemeProvider>
    </ThemeProvider>
  );
};

// CustomThemeProvider component to provide theme context
const CustomThemeProvider: React.FC<{ darkMode: boolean; children: ReactNode }> = ({
  darkMode,
  children,
}) => (
  <ThemeContext.Provider value={{ darkMode, toggleDarkMode: () => {} }}>
    {children}
  </ThemeContext.Provider>
);


// ToggleCustomTheme component to toggle between themes
const ToggleCustomTheme: React.FC<{ toggleDarkMode: () => void }> = ({
  toggleDarkMode,
}) => {
  const darkMode = useTheme().darkMode;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={darkMode}
        onChange={toggleDarkMode}
        aria-label="Platform"
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}
      >
        <ToggleButton value>
          <DarkModeIcon sx={{ fontSize: '20px', mr: 1 }} />
          Dark
        </ToggleButton>
        <ToggleButton value={false}>
          <LightModeIcon sx={{ fontSize: '20px', mr: 1 }} />
          Light
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default LandingPage;