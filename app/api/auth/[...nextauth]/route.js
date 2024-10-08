import { connectDB } from '@/lib/connectDB';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) return null;

        const db = await connectDB();
        const user = await db.collection('users').findOne({ email });
        if (!user) return null;

        const passwordMatched = bcrypt.compareSync(password, user.password);
        if (!passwordMatched) return null;

        return user;
      },
    }),
  ],
  callbacks: {},
  pages: { signIn: '/login' },
});

export { handler as GET, handler as POST };
