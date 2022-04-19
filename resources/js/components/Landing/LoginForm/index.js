import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";




const LoginForm = () =>{
    return(

        <form>
            <TextField
                type='text'
                variant='outlined'
                fullWidth
                size='small'
                margin='dense'
                label='Email'
            />

            <TextField
                type='password'
                variant='outlined'
                fullWidth size='small'
                margin='dense'
                label='Password'
            />

            <Button variant='contained'>Login</Button>
        </form>



    )
}

export default LoginForm
