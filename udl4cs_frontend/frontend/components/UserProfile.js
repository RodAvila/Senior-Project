import Image from "next/image"
import EditProfile from "./EditProfile"
import { useEffect, useState } from "react";
import { useAuth } from '@/AuthContext';
import { useRouter } from 'next/router';

export default function UserProfile({ authId }) {
  const router = useRouter();

  // const refreshData = () => {
  //   router.replace(router.asPath);
  // }

  const USER_API_BASE_URL = "http://localhost:8080/user1/" + authId;
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/user1/" + authId, {
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

  const refreshData = () => {
    fetchData();
  };



  useEffect(() => {
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
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="primary">Profile</h1>
                  </div>
                  <div className="col-md-6" style={{ textAlign: 'right' }}>
                    <a style={{ borderRadius: '16px!important' }} className="btn btn-secondary border-spacing-0.5" data-bs-toggle="modal" data-bs-target="#editprofile" role="button">Edit Profile</a>
                    <EditProfile userData={userData} refreshData={refreshData} authId={authId}></EditProfile>
                  </div>
                </div>
                <br />
                <div className="col-md-12">


                  <div className="row ">
                    <div className="col-md-12 " style={{ textAlign: 'center' }}>
                      <Image
                          src={userData.imageLink}
                          width={80}
                          height={80}
                          className="rounded-circle">

                      </Image>
                    </div>


                  </div>


                  <br />
                  <div className="row">
                    <p className="text"><strong className="profiletext">First Name: </strong>{userData.firstName} </p>

                  </div>
                  <br />
                  <div className="row">
                    <p className="text"><strong className="profiletext">Last Name: </strong>{userData.lastName} </p>
                  </div>
                  <br />
                  <div className="row">
                    <p className="text"><strong className="profiletext">Role: </strong>{userData.role} </p>
                  </div>

                  <br />
                  <div className="row">
                    <p className="text"><strong className="profiletext">Email: </strong>{userData.email} </p>
                  </div>

                  <br />
                  <div className="row">
                    <p className="text"><strong className="profiletext">Username: </strong>{userData.userName} </p>
                  </div>


                </div>
              </div>
            </div>
        )}
      </>
  )
}
export async function getServerSideProps(context) {
  // Fetch user data here using context
  const authId = useAuth();// Get authId from context (e.g., cookies or session)
  const USER_API_BASE_URL = "http://localhost:8080/user1/" + authId;

  try {
    const response = await fetch(USER_API_BASE_URL);
    const userData = await response.json();

    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return {
      props: {
        userData: null,
      },
    };
  }
}