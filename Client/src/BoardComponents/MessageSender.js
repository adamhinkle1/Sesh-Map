import React, {useState} from 'react'
import './MessageSender.css'
import db from './firebase'
import firebase from 'firebase'
import { Avatar } from '@material-ui/core'
import { useStateValue } from '../Context/StateProvider'
import {ThreadStateValue} from '../Context/ThreadProvider'
function MessageSender() {
    const [{thread}, dispatcher] = ThreadStateValue()
    const t = {thread}
    const [{user},dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        db.collection(t.thread).add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            likes: 0,
        })
        setInput('')
        setImageUrl('')
    }
    return (
        <div className = 'messageSender'>
            <div className="messageSender_top">
                <Avatar  src={user ? user.photoURL : ""} />
                <form>
                    <input className='messageSender_input' 
                    placeholder={`Comment`}
                    value={input}
                    onChange = {(e) => setInput(e.target.value)}/>
                    <input className='messageSender_img'
                    placeholder='img url' 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}/>
                    <button onClick={handleSubmit} type='submit'>
                        Hidden Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
