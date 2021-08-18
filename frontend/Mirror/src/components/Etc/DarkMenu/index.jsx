import { withStyles, Menu} from '@material-ui/core/';

const DarkMenu = withStyles({
    paper: {
      backgroundColor:'black',
      borderRadius:'5px',
      color:'white',
      borderRadius:'2px solid white'
      
    },
  })(Menu);

  export default DarkMenu;