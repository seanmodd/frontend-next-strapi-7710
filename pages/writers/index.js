import { useState } from 'react'

function UsersPage() {
  const [users, setUsers] = useState([])
  const fetchComments = async () => {
    const response = await fetch(
      'https://nextjs-strapiapi.herokuapp.com/writers'
    )
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
  return (
    <div>
      <h1>Writers</h1>
      <button onClick={fetchComments}>Load Names of Writers!</button>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
      <ul />
    </div>
  )
}

export default UsersPage
