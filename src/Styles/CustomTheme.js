import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2c4c3b',
      light: ''
    },
    secondary: {
      main: '#009432'
    },
    background: {
      default: '#212529',
      paper: '#495057',
    },
  },
  typography: {
    h1: {
      color: '#ced4da',
    },
}});
