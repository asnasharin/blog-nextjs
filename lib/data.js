import { connectDb } from "./utils"
import { Post, User } from "./models"

export const getAllPost = async () => {
    try {
        await connectDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
       console.log(error) 
    }
}

export const getAllUsers = async () => {
    try {
        await connectDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error)
    }
}