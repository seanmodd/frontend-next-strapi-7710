import { useState } from 'react'

function BlogPosts() {
  const [posts, setPosts] = useState([])
  const fetchComments = async () => {
    const response = await fetch(
      'https://nextjs-strapiapi.herokuapp.com/articles'
    )
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }
  return (
    <div>
      <h1>Blog Posts</h1>
      <button onClick={fetchComments}>Load Blog Posts</button>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <ul />
    </div>
  )
}

export default BlogPosts
