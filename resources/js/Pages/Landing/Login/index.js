import React, {useState} from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import LoginForm from "../../../components/Landing/LoginForm";
import {useStyles} from "./styles";

const Login = () => {
    const classes = useStyles();

    const [text, setText] = useState('Student Login')

    const clickHandler= (button) => {
        if(button === 'librarian'){
            setText('librarian Login')
        }else if(button === 'student'){
            setText('Student Login')
        }
    }

    return(
        <Container maxWidth='sm' >
            <Box className={classes.wrapper}>
                <Box textAlign='center'>
                    <Typography variant='h6'>E-Library</Typography>
                    <Typography variant='span'>Smart Library Management System</Typography>
                </Box>
                <Card>
                    <CardContent>
                        <Stack direction='row'>
                            <Button  variant='text' onClick={()=>clickHandler('student')}  className={classes.hello} fullWidth>Student Login</Button>
                            <Button  variant='text' onClick={()=>clickHandler('librarian')} fullWidth>Teacher Login</Button>
                        </Stack>
                        <LoginForm buttonType={text} />
                    </CardContent>
                </Card>
            </Box>
        </Container>
    )
}

export default Login;
