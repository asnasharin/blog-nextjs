import { connectDb } from "./utils"
import { Post } from "./models"

export const getAllPost = async () => {
    try {
        await connectDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
       console.log(error) 
    }
}