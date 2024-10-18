'use server'

import { User } from "./models";
import { connectDb } from "./utils";
import bcryptjs from "bcryptjs";

export const register = async (prevState, formData ) => {
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

            const user = await User.findOne({ email });

            if (!user) {
                return { success: false, error: "Invalid email or password" };
              }
          
              // Compare the provided password with the hashed password in the database
              const isPasswordMatch = await bcryptjs.compare(password, user.password);
              if (!isPasswordMatch) {
                return { success: false, error: "Invalid email or password" };
              }
          
              // If successful, return user details
              return { success: true, message: "Login successful", user: user };
          
        } catch (error) {
            console.log(error)
        }
}