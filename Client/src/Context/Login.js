import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from '../BoardComponents/firebase'
import {useStateValue} from './StateProvider'
import {actionTypes} from './reducer'
import { useHistory } from "react-router-dom";
function Login() {
    let history = useHistory();
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,  
            })
        }) 
        .catch((error)=> alert(error.message))
        .then(() => {
            history.push('/')
        }) 
    }
    return (   
        <div className='login'>
            <div className="login_logo">
                <img src='https://media.istockphoto.com/photos/tsunami-big-wave-on-surfing-beach-picture-id1186695921?k=6&m=1186695921&s=612x612&w=0&h=naM36rLniVJEiaEEYOn6OJVW25t_AA23y4QTiZ5VDyk='
                    alt=""
                />
                <img src="https://www.logo.wine/logo/Facebook"
                    alt="" 
                />
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login