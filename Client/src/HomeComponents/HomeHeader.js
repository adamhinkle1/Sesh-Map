import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar'
import {useStateValue} from '../Context/StateProvider'



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
  },
  appbar: {
    background: 'none',
    height: '6em',
    display: 'flex',
    justifyContent: 'right',
  },
  container: {
    marginTop: '20vh',
    display: 'flex',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'flexStart',
    fontFamily: 'Nunito',
    textAlign: 'center',
  },
  title: {
    textShadow: '0.5px 0.5px 10px rgba(0,0,0,1)',
    color: "rgb(200,175,140)",
    fontWeight: '600',
    fontSize: '5rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.appbar}>
        <Navbar color="black"/>
      </div>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Welcome to <br />
          Sesh Map
        </h1>
      </div>
    </div>
  );
}