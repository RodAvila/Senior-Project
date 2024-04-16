import React from 'react'
import Navbar from '../components/Navbar'
import UserProfile from '../components/UserProfile'
import { useRouter } from 'next/router'

const profile = () => {
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  return (
    <>
      <Navbar></Navbar>
      <br />
      <UserProfile refreshData={refreshData}></UserProfile>
    </>
  )
}

export default profile