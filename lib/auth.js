import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs"
import { connectDb } from "./utils";
import { User } from "./models";


export const { handlers: {GET, POST}, signIn, signOut, auth} = NextAuth({
    providers: [
        Credentials({
            name: 'Credentials',

            credentials: {
                email: {label: "email", type: "email"},
                password: { label: "passwrod", type: "password"}
            },
            authorize: async (credentials) => {
                const email = credentials.email
                const password = credentials.password
                
                if (!email || !password) {
                    throw new CredentialsSignin('Please provide email and pass')
                }

                await connectDb()

                const user = await User.findOne({ email });

                if (!user) {
                    throw new CredentialsSignin({ cause: "invalid email or pass"})
                }

                if (!user.password) {
                    throw new Error("invalid pass")
                }

                const isMatched = await bcryptjs.compare(password, user.password);

                if (!isMatched) {
                    throw new Error ("pass did not match")
                }

                const userData = {
                    email: user.email,
                    password: user.password,
                    // role: user.role,
                    id: user._id
                };
                return userData;
            }
        })
    ],
    secret: process.env.NEXT_PUBLIC_AUTH_URL,
}) 