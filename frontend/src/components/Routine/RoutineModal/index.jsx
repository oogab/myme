import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import RoutineModalItem from './RoutineModalItem/index';
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
  },
  routineItemList:{
    marginBottom:'60px',
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const open = props.routineModal;
  const setOpen = props.setRoutineModal;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">myme님의 아침 루틴</h2>
      <div className={classes.routineItemList}>
      <RoutineModalItem/>
      <RoutineModalItem/>
      <RoutineModalItem/>
      <RoutineModalItem/>
      </div>
      <RoutineModalItem/>
    </div>
  );

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}