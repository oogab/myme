import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from './styles.json'
const useStyles = makeStyles(() => (myStyle));
function App(props){
    const classes = useStyles();
    return(
<<<<<<< HEAD
        <div style={props.clicked?{backgroundColor:'white'}:{backgroundColor:'#B5E3D8'}} onClick={props.onClick} className={classes.dayDiv+' btn'}>
=======
        <div style={props.clicked?{backgroundColor:'white'}:{backgroundColor:'#B5E3D8'}} onClick={props.onClick} className={classes.dayDiv}>
>>>>>>> 6856e7cc1b7367bcf4168499048c46e94d453b23
            {props.dayName}
        </div>
    );
}
export default App;