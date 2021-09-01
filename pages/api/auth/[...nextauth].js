import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Providers.Twitter({
    //   clientId: process.env.TWITTER_ID,
    //   clientSecret: process.env.TWITTER_SECRET,
    // }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Email({
      server: {
        host: '',
        port: '',
        auth: {
          user: '',
          pass: '',
        },
      },
      from: '',
    }),
  ],
  // database: process.env.REACT_APP_DB_URL,
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: 'asdcvbtjhm',
  },
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session(session, token) {
      session.user.id = token.id
      return session
    },
  },
})
