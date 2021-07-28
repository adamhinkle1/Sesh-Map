import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton,Toolbar } from '@material-ui/core';
import Navbar from './Navbar'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from '../Context/StateProvider'
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    marginTop: '10px',
    background: 'none',
  },
  appbarWrapper: {
    width: '100%',
    margin: '0 auto',
  },
  appbarTitle: {
    textShadow: '1px 1px 20px rgba(0,0,0,1)',
    color: "rgb(200,175,140)",
    flexGrow: '1',
    fontSize: '3rem',
  },
  icon: {
    marginTop: '5px',
    backgroundColor: 'transparent',
    fontSize: '3rem',
    color: 'black',
    textDecoration: 'none',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    textShadow: '0.5px 0.5px 10px rgba(0,0,0,1)',
    color: "rgb(200,175,140)",
    fontSize: '5rem',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
  goDown: {
    color: 'rgb(200,175,140)',
    fontSize: '5rem',
    transition: 'transform 0.5s ease',
    '&:hover': {
      backgroundColor: 'none',
      transform: 'scale(1.1)',
      transform: 'rotate(-360deg)',
      textShadow: '2px 2px 50px white',
    },
  },
}));

export default function Header() {
  const [{user}, dispatch] = useStateValue()
  const classes = useStyles();
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            SeshMap
          </h1>
          <Navbar color="black"/>
        </Toolbar>
      </AppBar>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            Sesh Map.
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton style={{ backgroundColor: 'none' }}>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
          </Scroll>
        </div>
    </div>
  );
}