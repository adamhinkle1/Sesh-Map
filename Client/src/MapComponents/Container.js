import React,{useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button} from '@material-ui/core'
import SearchBar from './SearchBar'
import { CssBaseline } from "@material-ui/core";
import {LocContext} from '../MapComponents/locContext';


const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    padding: '50px 1vw',
    background: 'whitesmoke',
    height: '87vh',
    width: '23ch',
  },
  search: {
    width: '100%',
  },
  divider:{
    width: '100%',
    padding:'10px',
  },
  buttons: {
    paddingTop: '10px',
    width: '20ch',
    justifyContent: 'left',
    color: 'grey',
  }

}));

export default function Container() {
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