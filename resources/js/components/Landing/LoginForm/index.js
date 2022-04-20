import {Button, Card, CardContent, Grid, TextField, Typography} from "@mui/material";




const LoginForm = (props) =>{
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

            <Button  variant='contained'>{props.buttonType}</Button>
        </form>



    )
}

export default LoginForm
