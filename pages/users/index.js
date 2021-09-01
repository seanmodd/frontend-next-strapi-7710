import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState('')

  const fetchComments = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    setUsers(data)
  }

  const submitUser = async () => {
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ user }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }

  // const [users, setUsers] = useState([])
  // const [name, setName] = useState('')
  // const fetchComments = async () => {
  //   const response = await fetch('/api/hello')
  //   const data = await response.json()
  //   console.log(data)
  //   setUsers(data)
  // }
  // const submitName = async () => {
  //   const response = await fetch('/api/hello', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name }),
  //   })
  //   const data = await response.json()
  //   console.log(
  //     'here is what you get... from here on we handle data in our api route folder',
  //     data
  //   )
  // }

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
