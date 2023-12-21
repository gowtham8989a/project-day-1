import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { grey } from '@mui/material/colors';
import './styles/Register.css';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
    },
  });

export default function Register() {
  return (
    <div className='log1'>
    <form>
        <div className='container'>
            <div className='header'>
                <h1>Register</h1>
                <div className='Name'>
                <ThemeProvider theme={theme}>
                <TextField label="First Name" type='text' variant="outlined" required />
                <TextField label="Second Name" type='text' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='Details'>
                <ThemeProvider theme={theme}>
                <TextField label="Email" type='email' variant="outlined" required />
                <TextField label="Number" type='text' variant="outlined" required />
                </ThemeProvider>
                </div>
                <div className='Password'>
                <ThemeProvider theme={theme}>
                <TextField label="Password" type='password' variant="outlined" required />
                <TextField label="Confirm Password" type='password' variant="outlined" required />
                </ThemeProvider>
                </div>
                <ThemeProvider theme={theme}>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    </ThemeProvider>
                <div className='Button'>
                <ThemeProvider theme={theme}>
                    
                    <Link to='/NavBar'>
                    <Button variant="contained" size="large">Sign Up</Button>
                    </Link>
                </ThemeProvider>
                </div>
                <ThemeProvider theme={theme}>
                <div className='Login'>
                {/* <Link to='/Login'> */}
                    <Button varient='text' href=''>Already a Customer? Login!</Button>
                    {/* </Link> */}
                </div>
                </ThemeProvider>
            </div>
        </div>
    </form>
  </div>
  );
}
