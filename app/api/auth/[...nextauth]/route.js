import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);
        const res = await fetch("https://pamtechoga.com/api/auth/login", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "applcation/json",
          },
        });
        const user = res.json();
        
        if (res.ok && user) {
          res.status(200).json(user);
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/sign_in",
    error: "/error",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
