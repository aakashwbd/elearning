import React from "react";
import {Avatar, Box, Button, Card, CardContent, Container, Grid, IconButton, Stack, Typography} from "@mui/material";
import {useStyles} from "./styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BackupIcon from '../../../asset/image/icon/backup.png'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

const data = [
    {
        amount: 7510,
        title: 'Total Student',
        icon: <AccountCircleIcon/>
    },

    {
        amount: 7510,
        title: 'Total Halarpo',
        icon: <AccountCircleIcon/>
    },
    {
        amount: 7510,
        title: 'Total Student',
        icon: <AccountCircleIcon/>
    },

    {
        amount: 7510,
        title: 'Total Halarpo',
        icon: AccountCircleIcon
    }
]


const Home = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg' className={classes.wrapper}>
            <Box textAlign='center' my={2}>
                <Typography variant='h4'>Welcome , John Doe</Typography>
                <Typography variant='span'>Here Is Your Library Data You May Want to Know</Typography>
            </Box>
            <Grid container spacing={2}>
                {data.map((item, key) => (
                    <Grid item xs={4} key={key}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Box>
                                        <Typography variant='h4'>{item.amount}</Typography>
                                        <Typography variant='span'>{item.title}</Typography>
                                    </Box>
                                    {/*{item.icon}*/}


                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                ))}
            </Grid>

            <Grid
                container
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <Grid item xs={6}>
                    <Avatar className={classes.backupIcon} src={BackupIcon}/>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h6'>You can take backup of your data</Typography>
                    <Typography variant='span'>Last Backed Up : 10 jan 2021</Typography>
                </Grid>

                <Grid item xs={6}>
                    <Button variant='contained' startIcon={<SystemUpdateAltIcon />}>
                        Generate Backup
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;
