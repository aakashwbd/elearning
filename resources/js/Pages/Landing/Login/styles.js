import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(()=>({
   wrapper:{
       width: '100%',
       height: '100vh',
       display: 'flex',
       alignItem: 'center',
       flexDirection: 'column',
       justifyContent: 'center'
   },

    hello:{
       "&.MuiButton-root":{
           borderRadius: 0,
           borderBottom: '1px solid blue'
       }

   }
}))
