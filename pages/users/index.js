import { Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')

  const fetchComments = async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    setUsers(data)
  }

  const submitUser = async () => {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Users</h1>
      <VStack>
        <Stack mb="15px">
          <Text>Interested? Add your name below!</Text>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <button onClick={submitUser}>Submit</button>
        </Stack>
        <button onClick={fetchComments}>Load Users!</button>

        {users.map((user) => (
          <div key={user.id}>{user.id}</div>
        ))}
      </VStack>
    </div>
  )
}

export default UsersPage
