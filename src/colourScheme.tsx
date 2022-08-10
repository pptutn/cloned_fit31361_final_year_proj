import { createTheme } from '@mui/material/styles';

const theme =
    createTheme(
    {
        palette: {
        primary: {
            // teal colour as the primary colour, with light and dark hues
            light:  '#33ab9f',
            main: '#009688',
            dark: '#00695f'
            },
            secondary: {
                light: '#6fbf73',
                main: '#4caf50',
                dark: '#357a38'
            },
        },
    });

export default theme;