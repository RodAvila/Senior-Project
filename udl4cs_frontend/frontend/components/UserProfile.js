import Image from "next/image"
import EditProfile from "./EditProfile"
import { useEffect, useState } from "react";
import { useAuth } from '@/AuthContext'
import { useRouter } from 'next/router';

export default function UserProfile({ userId }) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }
  console.log(userId);
  // const [user, setuser] = useState(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try{
  //       const response = await fetch('"http://localhost:8080/user1s"')
  //       if(!response.ok){
  //         throw new Error('Failed to fetch user data')
  //       }
  //       const userData = await response.json();
  //       setuser(userData);
  //     }
  //     catch{


  //     }
  //   }
  // }
  // )

  const { authId } = useAuth()
  console.log(authId);

  const USER_API_BASE_URL = "http://localhost:8080/user1/" + authId;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userData = await response.json();
        setUserData(userData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (


    <>
      {!loading && (
        <div className="container d-flex align-items-center justify-content-center">
          <div className="col-lg-8 col-sm-12 col-12" style={{
            borderRadius: '16px',
            margin: 'auto',
            padding: '20px',
            backgroundColor: '#F9F9F9',
            boxShadow: '0 0 10px rgba(234, 234, 234, 0.8)'
          }}>
            <div class="row">
              <div class="col-md-6">
                <h1 style={{ fontSize: '32px', marginBottom: '10px', color: '#333' }}>Profile</h1>
              </div>
              <div className="col-md-6" style={{ textAlign: 'right' }}>
                <a style={{ borderRadius: '16px!important' }} className="btn btn-secondary border-spacing-0.5" data-bs-toggle="modal" data-bs-target="#editprofile" role="button">Edit Profile</a>
                <EditProfile userData={userData} refreshData={refreshData}></EditProfile>
              </div>
            </div>
            <br />
            <div class="col-md-12">


              <div className="row ">
                <div class="col-md-12 " style={{ textAlign: 'center' }}>
                  <Image
                    src={"/icon.png"}
                    width={80}
                    height={80}
                    className="rounded-circle">

                  </Image>
                </div>


              </div>


              <br />
              <div className="row">
                <p>First Name: {userData.firstName} </p>

              </div>
              <br />
              <div className="row">
                <p>Last Name: {userData.lastName}</p>
              </div>
              <br />
              <div className="row">
                <p>Role: {userData.role}</p>
              </div>

              <br />
              <div className="row">
                <p>Email: {userData.email}</p>
              </div>

              <br />
              <div className="row">
                <p>Username: {userData.userName}</p>
              </div>

              <br />
            </div>
          </div>
        </div>
      )}
    </>
  )
}