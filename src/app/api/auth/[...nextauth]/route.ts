import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import Facebook from "next-auth/providers/facebook";



 const  authOptions : NextAuthOptions = {
    providers  : [
     Facebook({
        clientId: process.env.FACEBOOK_CLINET_ID!,
      clientSecret: process.env.FACEBOOK_CLINET_SECRET!,
     }),
    ],
    pages : {
      signIn : "/auth/signin",
    }
};

const handler = NextAuth(authOptions);
export  {handler as GET , handler as POST};