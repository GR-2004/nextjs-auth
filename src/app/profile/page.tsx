'use client'
import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserData = async () => {
    try {
      const res = await axios.get("/api/users/profile")
      console.log(res.data);
      setData(res.data.data._id)
      toast.success("user fetched successfully");
    } catch (error : any) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const logout = async () => {
    try {
      const res = await axios.get("/api/users/logout")
      console.log(res.data);
      toast.success("user logout successfully");
      router.push("/login")
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile page</h1>
      <hr />
      <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <hr />
      <button onClick={logout} className='bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>logout</button>
      <button onClick={getUserData} className='bg-green-500 mt-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Get user details</button>
    </div>
  )
}

export default ProfilePage
