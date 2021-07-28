import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import {ThreadStateValue} from '../Context/ThreadProvider'
import {useStateValue} from '../Context/StateProvider'
function Feed(props) {
    const [posts,setPosts] = useState([])
    const [{thread}, dispatch] = ThreadStateValue()
    const [{user},dispatch2] = useStateValue()

    const t = {thread}

    useEffect(() => {
        try{        
            db.collection(t.thread).orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
            })
        }
        catch (error) {
            console.log(error)
        }
        return () => {
        }
    }, [{thread}])

    return (
        <div className='feed'>
            <div className='feed_top'>
                <h1 className='title'>
                    {t.thread}
                </h1>
            </div>
            <MessageSender />
            <div style={{padding:'20px'}}>
            </div>
            {posts.map(post => (
                <Post
                key={post.id}
                profilePic={post.data.profilePic}  
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                docID={post.id}
                />
            ))
            }
        </div>
    )
}

export default Feed