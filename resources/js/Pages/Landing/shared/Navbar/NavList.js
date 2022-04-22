import {List, ListItem, ListItemText, Typography} from "@mui/material";
import {useStyles} from "./styles";
import {NavLink} from "react-router-dom";

const NavList = () => {

    const classes = useStyles()

    return(
        <List className={classes.navList}>

            <NavLink to="/">
                <ListItem>
                    <ListItemText>Book Requested</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/">
                <ListItem>
                    <ListItemText>Department</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/">
                <ListItem>
                    <ListItemText>Generate Report</ListItemText>
                </ListItem>
            </NavLink>


        </List>
    )
}

export default NavList
