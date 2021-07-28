import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import myStyle from './styles'
const useStyles = makeStyles(() => (myStyle));
function App(props){
    const classes = useStyles();
    let [color, setColor] = useState( {backgroundColor:'#B5E3D8'});
    function changeColor() {
        if(props.clicked){
            setColor({
                backgroundColor:'white'
              });
        }else{
            setColor({
                backgroundColor:'#B5E3D8'
              });
        }
        
      }

    let [bgColor] = useState(color);
    return(
        <div style={bgColor} onClick={changeColor} className={classes.dayDiv}>
            {props.dayName}
        </div>
    );
}
export default App;