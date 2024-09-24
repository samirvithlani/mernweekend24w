import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiRev1 = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data)
    setPosts(res.data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const rowsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allows posts to wrap and form rows
    gap: '20px',      // Adds space between boxes
    justifyContent: 'space-around', // Aligns posts within each row
  }

  const boxStyle = {
    width: '200px',
    padding: '10px',
    border: '1px solid black',
    height: '400px',
    boxSizing: 'border-box',
  }

  return (
    <div>
      <h1>POSTS</h1>
      <div style={rowsContainerStyle}>
        {
          posts?.map((post, index) => (
            <div key={index} style={boxStyle}>
              <p>TITLE : {post.title}</p>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
