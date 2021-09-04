import React, { useEffect, useState } from 'react'
import Post from './Post'
import auth from './../auth/auth-helper'
import {listNewsFeed} from './api-post.js'

export default function PostList() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        const jwt = auth.isAuthenticated()
  
      listNewsFeed({
        userId: jwt.user._id
      }, {
        t: jwt.token
      }, signal).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setPosts(data)
        }
      })
      return function cleanup(){
        abortController.abort()
      }
  
    }, [])
    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} post={post}/>
            ))}
        </div>
    )
}
