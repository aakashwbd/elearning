import React from "react";
import {Box, Typography} from "@mui/material";
import {useStyles} from "./styles";

const Home = () =>{
    const classes = useStyles()
    return(
        <Box className={classes.wrapper}>
            <Typography variant='h4'>Hi I am Rupom.</Typography>
        </Box>
    )
}

export default Home;
