import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import { teal } from '@material-ui/core/colors';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const basicStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: '20px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const chipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5),
    },
    margin: '0 50px',
  },
}));

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(Button);

  const ColorAppBar = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(teal[300]),
      backgroundColor: teal[500],
      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  }))(AppBar);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const basic = basicStyles();
  const [open, setOpen] = React.useState(false);
  const chipClasses = chipStyles();
  const handleClick = () => {
      console.info('You clicked the Chip.');
    };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton variant="outlined" color="teal" onClick={handleClickOpen}>
        상세보기
      </ColorButton>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <ColorAppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              상세보기
            </Typography>
            
          </Toolbar>
        </ColorAppBar>
        <Grid container spacing={3} style={{padding: '10px'}}>
        <Grid item xs={12} style={{textAlign: 'center', background: '#eeeeee'}}>
          <img src="/images/challenge.png" alt="" style={{width: '50%'}}></img>
        </Grid>
        
        <Grid item xs={12} sm={6} style={{padding: '30px', display:'inline-block'}}>
          <h2>아침 10분 명상</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FavoriteBorderIcon style={{float: 'right', padding: '30px'}}></FavoriteBorderIcon>
        </Grid>
        <Grid item xs={12}>
            <div className={chipClasses.root}>
                <Chip label="정서" color="#66A091"/>
                <Chip label="2주" />
                <Chip  label="평일매일"  />
            </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={basic.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={basic.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={basic.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
      </Dialog>
    </div>
  );
}