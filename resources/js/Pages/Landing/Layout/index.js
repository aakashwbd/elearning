import {Box} from "@mui/material";
import Navbar from "../shared/Navbar";

const Layout = ({children}) => {
    return(
        <Box>
            <Navbar/>
            {children}
        </Box>
    )
}

export default Layout
