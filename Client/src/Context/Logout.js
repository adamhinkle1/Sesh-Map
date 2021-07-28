import React from 'react'
import {useStateValue} from './StateProvider'
import {Button} from '@material-ui/core'
import {auth, provider} from '../BoardComponents/firebase'
import {actionTypes} from './reducer'
import { useHistory } from "react-router-dom";
function Logout() {
    let history = useHistory();
    const [state, dispatch] = useStateValue()
    const signOut = () => {
      auth
      .signOut()
      .then(() => {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,  
         })
      })
      .then(()=> {
        localStorage.removeItem("userData")
      })
      .catch((error)=> alert(error.message))
      .then(() => {
          history.push('/')
      }) 
    }
    return (
        <div>
            <Button type='submit' onClick={signOut}>
                Sign Off
            </Button>
        </div>
    )
}

export default Logout
