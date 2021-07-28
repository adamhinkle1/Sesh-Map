import React from 'react'
import './Thread.css'
import {ThreadStateValue} from '../Context/ThreadProvider'
import {actionTypes} from '../Context/reducer'
import {Button} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    buttons: {
      paddingTop: '10px',
      width: '15vw',
      justifyContent: 'left',
      color: 'grey',
    }
  }));
function Thread({text, collection}) {
    const classes = useStyles()
    const c = {collection}

    const [thread, dispatch] = ThreadStateValue()
    const setThread = () => {
    dispatch({
                type: actionTypes.SET_THREAD,
                thread: c.collection, 
            })
    }
    return (
        <Button className={classes.buttons} onClick={setThread}>
            {text}
        </Button>
    )
}

export default Thread
