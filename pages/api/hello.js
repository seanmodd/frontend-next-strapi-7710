// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: 'Shayan Modjtehedi',
      age: '300',
      hobbies: 'Coding! Here is my fake API I just made btw...',
      image:
        'https://learnyzen.com/wp-content/uploads/2017/08/test1-481x385.png',
    },
    {
      id: 2,
      name: 'Chief Keef',
      age: '30',
      hobbies: 'Rapping and shit nigga!',
      image:
        'https://t4.ftcdn.net/jpg/02/85/48/23/360_F_285482318_ZKHUUIcPj6xBjt3JZIKHJfRxUWlKyflN.jpg',
    },
    {
      id: 3,
      name: 'Sean Modd',
      age: '100',
      hobbies: 'Persina history... it is awesome.',
      image:
        'https://thumbs.dreamstime.com/b/man-hipster-avatar-cartoon-guy-black-hair-flat-icon-blue-background-user-person-character-vector-illustration-185480506.jpg',
    },
  ])
}
