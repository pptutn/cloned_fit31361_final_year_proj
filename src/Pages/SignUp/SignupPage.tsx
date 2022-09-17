import "./SignupPage.css";
import { signUp } from "../../firebase";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from "@mui/material/colors";
import { Route } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: teal,
        secondary: {
            main: '#4caf50',
          },
    }
});


function SignupPage() {

    // allows reference to what user inputted in all the text fields on the sign up page text field 
    const [firstNameRef, setFirstName] = React.useState('');
    const [lastNameRef, setLastName] = React.useState('');
    const [passwordRef, setPassword] = React.useState('');
    const [emailRef, setEmail] = React.useState('');
    const [universityRef, setUniversity] = React.useState('');


    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // call the firebase sign up method, once hte user has filled in fields required
        let validUserMade = signUp(firstNameRef, lastNameRef, emailRef, passwordRef, universityRef);

        if (await validUserMade) {
            window.location.href="/";
        }
    }

     
    return (
        <ThemeProvider theme={theme}>
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
                        {/* gives the avatar at the top of the sign up page */}
                        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        </Avatar>

                        <Typography component="h1" variant="h5">
                        Sign up
                        </Typography>
                        
                        <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to firstNameRef that can be referenced in handleSignup function 
                                onChange={(e) => setFirstName(e.target.value)}
                                autoComplete="given-name"
                                name="firstname"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus 
                            />
                            </Grid>
                            
                            <Grid item xs={12} sm={6}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to lastNameRef that can be referenced in handleSignup function 
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
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
                                autoComplete="new-password"
                            />
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to emailRef that can be referenced in handleSignup function 
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            </Grid>

                            <Grid item xs={12}>
                            <TextField
                                // on change is a function that sets the value inside the text field
                                // to univeristyRef that can be referenced in handleSignup function 
                                onChange={(e) => setUniversity(e.target.value)}
                                fullWidth
                                name="university-attending"
                                label="University Attending"
                                type="university-attending"
                                id="university-attending"
                                autoComplete="university"
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
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>
                    </Container>
                    </ThemeProvider>
                    );
    // )
}

export default SignupPage