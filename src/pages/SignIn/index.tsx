// Form components
import { Formik } from 'formik'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import SignUpModal from '../../components/signUpModal'

import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const SignIn = () => {

    return (
        <Grid container sx={{
            height: '100vh',
        }}>
            <Grid sm={6} component={Paper} elevation={6}>
                <Typography>School's title</Typography>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    my: 20,
                    mx: 4,
                }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 1 }}>Welcome back</Typography>
                    <Typography>Please enter your details</Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField margin="normal" fullWidth label="Your email" autoFocus />
                        <TextField type="password" margin="normal" fullWidth label="Your password" />
                        <Button type="submit" variant="contained" fullWidth>Sign In</Button>
                    </Box>
                    <Typography>Don't have an account?<SignUpModal /></Typography>
                </Box>
            </Grid>
            <Grid
                sm={6}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }} />
        </Grid>


    )
}

export default SignIn
