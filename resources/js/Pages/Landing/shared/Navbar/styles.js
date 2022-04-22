import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(()=>({
    logo:{
        width: 50,
        height: 50,
        borderRadius: '0 !important',
        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    navList: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& a": {
            textDecoration: "none",
            color: "white",
            textTransform: "uppercase",

            "&:hover": {
                color: '#009A6B'
            }
        },
    }

}))
