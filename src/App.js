import { ThemeProvider, createTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Home from './Home'


function App() {

  const theme = createTheme({
    spacing: 4,
    palette: {
      secondary: {
        main: '#f44336',
      },
      tertiary: {
        main: '#fff',
      }
    },
  });

  makeStyles(theme)

  return (

      <ThemeProvider theme={theme}>
       <Home />
      </ThemeProvider>
   

  );
}

export default App;
