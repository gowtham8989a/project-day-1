import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button , FormControlLabel, FormGroup , Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import './styles/Login.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });

export default function Login() {
  return (
    <div className='log'>
    <form >
        <div className='container1'>
            <div className='header'>
                <h1>Login</h1>
                <div className='Email'>
                <ThemeProvider theme={theme}>
                <TextField label="Email" type='email' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='Password'>
                <ThemeProvider theme={theme}>
                <TextField label="Password" type='password' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='RememberMe'>
                <ThemeProvider theme={theme}>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me " />
                </FormGroup>
                </ThemeProvider>
                </div>
                <div className='Button'>
                <ThemeProvider theme={theme}>
                    
                    <Link to='/NavBar'>
                    <Button variant="contained" size="large">Login</Button></Link>
                </ThemeProvider>
                </div>
                <ThemeProvider theme={theme}>
                <div className='Forget-Password'>
                    
                </div>
                <div className='Sign-Up'>
                <Link to='/Register'>
                    <Button varient='text'>New Member? Sign Up!</Button></Link>
                </div>
                </ThemeProvider>
            </div>
        </div>
    </form>
  </div>
  );
}
