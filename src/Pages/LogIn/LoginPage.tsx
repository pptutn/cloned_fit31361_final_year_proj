/*
this is the Log In page file, allows the user to log in to their account and accesses project's firestore
to authenticate the user's inputted credentials.

Author: Rachel Knowles 
Version: 1.0.0
*/

import "./LoginPage.css";
import { auth, database, logInWithEmailAndPassword } from "../../firebase";
import { addDoc, collection } from "@firebase/firestore";
import React from "react";
import { createTheme, Link, ThemeProvider } from "@mui/material";
// import { colourTheme } from "../../colourScheme";
import theme from "../../colourScheme"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Banner from "../../Components/Headers/Banner";

function LoginPage() {

    // allow the inputted username and password to set and then referenced using
    // usernameRef and passwordRef at a later stage
    const [emailRef, setEmail] = React.useState('');
    const [passwordRef, setPassword] = React.useState('');

    // create a firebase reference to the collection
    const firebaseCollectionRef = collection(database, "messages");

    // create a function that handles when the log in button is selected 
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // prevent default so the page isn't reloaded when click the log in button
        
        console.log(emailRef + " " + passwordRef);

        // save the data to the firebase collection
        let validUserSignInCredentials = logInWithEmailAndPassword(emailRef, passwordRef);

        if (await validUserSignInCredentials) {
            window.location.href="/";
        }
    }

    return (

      <ThemeProvider theme={theme}>
        <Banner />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                    <Box
                        sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                        Log In
                        </Typography>
                        
                        <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 3 }}>

                        <Grid container spacing={2}>
                            
                            
                            <Grid item xs={12}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to usernameRef that can be referenced in handleSignup function 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                name="email"
                                label="Email Address"
                                type="email"
                                id="email"
                                autoComplete="email"
                            />
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to passwordRef that can be referenced in handleSignup function 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                            />
                            </Grid>
            
                        </Grid>
                        <Button
                            type="submit"
                            color="primary"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 4, mb: 2 }}
                        >
                            Log In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    Do not have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Container>
                    </ThemeProvider>
                    );
  }

  export default LoginPage;

