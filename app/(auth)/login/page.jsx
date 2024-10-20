'use client'
import AuthHeader from "@/components/AuthHeader"
import Login from "@/components/Login"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

const Page = async() => {
    const session = await auth();

    if (session?.user?.email === 'admin@gmail.com') {
        redirect('/admin');
    } 
    else if (session) {
        redirect('/blog');
    }
    return (
        <>
        <AuthHeader />
        <Login />
        </>
    )
}

export default Page;