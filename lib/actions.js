'use server'

import { User } from "./models";
import { connectDb } from "./utils";
import bcryptjs from "bcryptjs";
import { signIn, signOut } from "./auth";

export const register = async ( formData ) => {
    const { name, email, password} = Object.fromEntries(formData);
    
    try {
        await connectDb();

        const existUser = await User.findOne({ email });
        if (existUser) {
            return { success: false, error: "email already exists"}
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedpass = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name, 
            email,
            password: hashedpass
        });

        await newUser.save();
        return { success: true, message: "registration successfull", User: newUser}
    } catch (error) {
        console.log(error)
    }
}

export const login = async (prevState, formData) => {

        const {email, password} = Object.fromEntries(formData);

        try {
            await connectDb();

            
            await signIn("credentials", {
                redirect: false,
                email,
                password
            });
          
        } catch (error) {
            console.log(error)
        }
}