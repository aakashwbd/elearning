import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(()=>({
    wrapper:{
        marginTop: 100,
        padding: 20,
    },

    icon: {
        width: 40,
        height:40
    },

    card: {
        '&:hover':{
            background: '#009A6B',
            color: 'white',
        }
    },

    backupIcon: {
        width: 400,
        height: 200,
        borderRadius: '0 !important',

        '&.MuiAvatar-root': {
            objectFit: 'cover'
        }
    }
}))
