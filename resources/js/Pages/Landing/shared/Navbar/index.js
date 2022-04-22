import {AppBar, Avatar, Container, Grid, IconButton, Toolbar} from "@mui/material";
import LogoImg from '../../../../asset/image/E-Library.png';
import {useStyles} from "./styles";
import NavList from "./NavList";
const Navbar = () => {
    const classes = useStyles()
    return(
        <AppBar>
            <Toolbar>
                <Container maxWidth='lg'>
                    <Grid container alignItems='center' justifyContent='space-evenly'>
                        <Grid item>
                            <IconButton>
                                <Avatar className={classes.logo} src={LogoImg}/>
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <NavList/>
                        </Grid>

                        <Grid item>
                            <Avatar/>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar
