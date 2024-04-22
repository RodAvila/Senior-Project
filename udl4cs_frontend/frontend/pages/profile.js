import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import UserProfile from '../components/UserProfile'
import { useRouter } from 'next/router'
import { useAuth } from '@/AuthContext'

const profile = () => {
  const router = useRouter();
  const { authId } = useAuth();

  const refreshData = () => {
    router.replace(router.asPath);
  }
  return (
    <>
      <Navbar></Navbar>
      <br />
      <UserProfile refreshData={refreshData} authId={authId}></UserProfile>
    </>
  )
}

export default profile