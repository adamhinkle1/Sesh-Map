import React, {useState} from 'react'
import './Post.css'
import {Avatar} from '@material-ui/core'

import {useStateValue} from '../Context/StateProvider'
import {ThreadStateValue} from '../Context/ThreadProvider'


function Post({profilePic, image, username, timestamp, message, docID }) {
    
    // const [{user},dispatch2] = useStateValue()
    // const [{thread}, dispatch] = ThreadStateValue()
    // const [liked, setLiked] = useState(false)
    // const [doc, setDoc] = useState(null)
    // const [numLikes, setNumLikes] = useState(0)
    // useEffect(()=>{
    //     db.collection("likes")
    //     .where("post", "==", docID)
    //     .get()
    //     .then((querySnapshot) => { 
    //         querySnapshot.forEach((doc) => {
    //             setNumLikes(numLikes + 1)
    //         });
    //     })
    //     db.collection("likes")
    //     .where("post", "==", docID)
    //     .where("user","==", user.email)
    //     .limit(1)
    //     .get()
    //     .then((querySnapshot) => { 
    //         querySnapshot.forEach((doc) => {
    //             setLiked(true) 
    //         });
    //     })

    // },[docID, liked, numLikes, user.email])

    // const handleLike = e => {
    //     e.preventDefault()
    //     //check if user has already liked the post
    //     db.collection("likes")
    //     .where("post", "==", docID)
    //     .where("user","==", user.email)
    //     .limit(1)
    //     .get()
    //     .then((querySnapshot) => { 
    //         querySnapshot.forEach((doc) => {
    //             setLiked(true) 
    //             setDoc(doc)
    //         });
    //     })
    //     .then(() => {
    //         console.log(liked)
    //         if (!liked) {
    //             try{
    //                 console.log('posting to db')
    //                 console.log(docID, user.displayName)
    //                 db.collection("likes").add({
    //                     post: docID,
    //                     user: user.email,
    //                 })
    //                 setLiked(true) 
    //             }
    //             catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         else{
    //             console.log(doc)
    //             setLiked(false) 
    //         }
    // })
        
    // }
    return (
        <div className='post'>
            <div className="post_top">
                <Avatar   src={profilePic}/>

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div> 

            <div className="post_bottom">
                <p>{message}</p>
            </div>
            <div className="post_image">
                <img src={image} alt=""/>
            </div>

        </div>
    )
}

export default Post
