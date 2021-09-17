import React, {useState, useEffect} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import {ThreadStateValue} from '../Context/ThreadProvider'
function Feed(props) {
    const [posts,setPosts] = useState([])
    const [{thread}, dispatch] = ThreadStateValue()

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
    }, [t.thread])

    return (
        <div className='feed'>
            <div className='feed_title_container'>
                <h1 className='feed_title_text'>
                    {t.thread}
                </h1>
            </div>
            <div className='feed_posts'>
                <MessageSender />
                <div style={{padding:'20px'}}></div>
                
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
        </div>
    )
}

export default Feed