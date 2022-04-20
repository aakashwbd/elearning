import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(()=>({
    logo:{
        width: 100,
        height: 40,
        borderRadius: 0,

        "&.MuiAvatar-root": {
            objectFit: 'cover'
        }
    },

    horizontalList: {
        display: 'flex',
        alignItems: 'center'
    }

}))
