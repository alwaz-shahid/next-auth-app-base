import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
let secret = process.env.NEXTAUTH_SECRET;

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret,
};

export default NextAuth(authOptions);
// clientId: process.env.GITHUB_ID,
// clientSecret: process.env.GITHUB_SECRET,
