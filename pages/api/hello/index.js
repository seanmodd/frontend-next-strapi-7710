import { users } from '../../../../users-data'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    const { user } = req.body
    const newUser = {
      id: Date.now(),
      name: user,
    }
    users.push(newUser)
    res.status(201).json(newUser)
  }
}
// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     res.status(200).json(users)
//   } else if (req.method === 'POST') {
//     const { name } = req.body
//     const newUser = {
//       id: Date.now(),
//       name,
//     }
//     users.push(newUser)
//     res.status(201).json(newUser)
//   }
// }
