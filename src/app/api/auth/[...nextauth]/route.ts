import axios from 'axios'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import users from '../../../_json/users.json'
import { UserJson } from '@/app/_interfaces/UserJson'

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 2 * 60 * 60, // 2 hours
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user: any = users.find((user: UserJson) => user.email === credentials?.email)
        if(user.password !== credentials?.password) {
            return null
        }
        return user
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, trigger, session }: any) => {
      user && (token.user = user)
      if (trigger === 'update' && session?.name) {
        token.token = user.token
      }
      return token
    },
    session: async ({ session, token }: any) => {
      session.token = token.token
      return session
    },
  },
})
export { handler as GET, handler as POST }
