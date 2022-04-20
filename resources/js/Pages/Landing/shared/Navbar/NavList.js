import {List, ListItem, Typography} from "@mui/material";
import {useStyles} from "./styles";

const NavList = () => {

    const classes = useStyles()

    return(
        <List className={classes.horizontalList}>
            <ListItem>
                <Typography variant='span'>
                    Book Requested
                </Typography>
            </ListItem>

            <ListItem>
                <Typography variant='span'>
                    Department
                </Typography>
            </ListItem>

            <ListItem>
                <Typography variant='span'>
                    Generate Report
                </Typography>
            </ListItem>
        </List>
    )
}

export default NavList
