import * as React from 'react';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function ResponsiveFontSizes(header, title) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant={header}>{title}</Typography>
      </ThemeProvider>
    </div>
  );
}