import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Stack, Typography} from "@mui/material";
import LoginForm from "../../../components/Landing/LoginForm";
import {useStyles} from "./styles";

const Login = () => {
    const classes = useStyles();

    return(
        <Container maxWidth='sm' >
            <Box class={classes.wrapper}>
                <Box textAlign='center'>
                    <Typography variant='h6'>E-Library</Typography>
                    <Typography variant='span'>Smart Library Management System</Typography>
                </Box>

                <Card>
                    <CardContent>
                        <Stack direction='row'>
                            <Button variant='text' className={classes.hello} fullWidth>Student Login</Button>
                            <Button variant='text' fullWidth>Teacher Login</Button>
                        </Stack>

                        <LoginForm/>
                    </CardContent>
                </Card>

            </Box>
        </Container>
    )
}

export default Login;
