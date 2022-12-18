import React,{useState} from 'react'
import { ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Home from './Home'


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: darkMode ?'dark': 'light',
      primary: {
        main: '#FFF'
      },
      secondary: {
        main: '#3EA6FF',
      },
      gray: {
        main: '#e3e3e3',
      },
      background: {
        default: darkMode? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#F4F6F8',
        paper: darkMode? '#232323' : '#FFF'
      }
    },
  });

  makeStyles(theme)

  return (

      <ThemeProvider theme={theme}>
       <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
   

  );
}

export default App;
