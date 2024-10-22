'use server'

import { User, Post } from "./models";
import { connectDb } from "./utils";
import bcryptjs from "bcryptjs";
import { signIn, signOut } from "./auth";

export const register = async ( formData ) => {
    if (!formData) {
        return { success: false, error: "No form data provided" };
    }
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

// create post 

export const createPost = async (formData) => {
    try {
        await connectDb();

        const {title, category, content, image} = Object.fromEntries(formData)

        const newUser = new Post({
            title,
            category,
            content,
            image
        });

        await newUser.save();
        console.log("save to database")
    } catch (error) {
        console.log(error)
    }
}