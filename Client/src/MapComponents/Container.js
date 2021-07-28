import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from '@material-ui/core'
import SearchBar from './SearchBar'
import { CssBaseline } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {LocContext} from '../MapComponents/locContext';


const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    padding: '50px 1vw',
    background: 'whitesmoke',
    height: '90vh',
    width: '17vw',
  },
  divider:{
    padding:'10px',
  },
  buttons: {
    paddingTop: '10px',
    width: '15vw',
    justifyContent: 'left',
    color: 'grey',
  }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ClippedDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

const handleCloseDialog = () => {
    setOpen(false);
};

  const classes = useStyles();
  const [locCategory, setLocCategory] = useContext(LocContext);

    const setSurfing= () => {
      setLocCategory("Surfing");
  }

  const setSkate= () => {
      setLocCategory("Skateboarding");
  }
  const setHiking= () => {
    setLocCategory("Hiking");
}

const setRock= () => {
  setLocCategory("Rock Climbing");
}


  const resetCategory= () => {
      setLocCategory(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SearchBar className={classes.search} />
      <div className={classes.divider} ></div>
      <div>
            <Button onClick={setSurfing} className={classes.buttons}>Surfing</Button>
            <Button onClick={setSkate} className={classes.buttons}>Skateboarding</Button>
            <Button onClick={setHiking} className={classes.buttons}>Hiking</Button>
            <Button onClick={setRock} className={classes.buttons}>Rock Climbing</Button>
            <Button onClick={resetCategory} className={classes.buttons}>Clear</Button>
      </div>

    </div>
  );
}