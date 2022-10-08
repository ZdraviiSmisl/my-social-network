import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import {NextResponse} from "next/server";

const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,

  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const {email, password} = credentials;
        if (email !== "evgeniy@gmail.com" || password !== "CommonSense8410") {
          throw new Error("Invalid Login or Password");
        }
        return {userId: 8410, name: "Evgeniy", email: "evgeniy@gmail.com", role: "admin"};
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
    signOut: "/signOut",
    },


  callbacks: {
    jwt(params) {
      //update token
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      //return final token
      return params.token;
    }

  },
};


export default NextAuth(authOptions);



