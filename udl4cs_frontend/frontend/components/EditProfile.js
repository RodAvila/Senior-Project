import { useState, useEffect } from "react";
import { useAuth } from '@/AuthContext'
import { useRouter } from 'next/router';
import Link from "next/link";

export default function EditProfile({ userData, refreshData, authId }) {
  const router = useRouter();

  console.log(userData.firstName);
  const USER_API_BASE_URL = "http://localhost:8080/user1/" + authId;
  const UPDATEUSER_API_BASE_URL = "http://localhost:8080/user1/" + authId;
  const DELETEUSER_BASE_API = "http://localhost:8080/user1/" + authId;
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState(null);


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
        const newUser = await response.json();
        setNewUser(newUser);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setNewUser({ ...newUser, [event.target.name]: value });
  }

  const saveUser = async (e) => {
    e.preventDefault();
    const response = await fetch(UPDATEUSER_API_BASE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    //router.reload();
    refreshData();
  };

  const [deleteUser, setDeleteUser] = useState({
    id: authId
  })

  const deleteCurrUser = async (e) => {


    fetch(DELETEUSER_BASE_API, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deleteUser),
    });
    const { isAuthenticated } = false;
    router.push('/resources');
    refreshData();


  }




  return (
    <>

      {!loading && (
        <div class="modal fade" id="editprofile" tabindex="-1" aria-labelledby="editProfileLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="editProfileLabel">Edit Profile</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="form-floating mb-3">
                    <input type="text"
                      name="firstName"
                      value={newUser.firstName}
                      onChange={(e) => handleChange(e)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputFirstName"
                      placeholder="First Name"
                      required />
                    <label htmlFor="inputFirstName">First Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      name="lastName"
                      value={newUser.lastName}
                      onChange={(e2) => handleChange(e2)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputLastName"
                      placeholder="Last Name"
                      required />
                    <label htmlFor="inputLastName">Last Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text"
                      name="role"
                      value={newUser.role}
                      onChange={(e3) => handleChange(e3)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputRole"
                      placeholder="Role"
                      required />
                    <label htmlFor="inputRole">Role</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email"
                      name="email"
                      value={newUser.email}
                      onChange={(e4) => handleChange(e4)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputEmail"
                      placeholder="Email"
                      aria-describedby="emailHelp"
                      required />
                    <label htmlFor="inputEmail">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text"
                      name="userName"
                      value={newUser.userName}
                      onChange={(e5) => handleChange(e5)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputuserName"
                      placeholder="Username"
                      required />
                    <label htmlFor="inputuserName">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password"
                      name="password"
                      onChange={(e6) => handleChange(e6)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputPassword"
                      placeholder="Password"
                      required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text"
                      name="imageLink"
                      value={newUser.imageLink}
                      onChange={(e7) => handleChange(e7)}
                      className="form-control"
                      style={{ borderRadius: '16px!important' }}
                      id="inputImageLink"
                      placeholder="Upload Image Link"
                    ></input>
                    <label htmlFor="inputUploadLink">Upload Image Link</label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <div class="d-flex justify-content-start me-auto">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={deleteCurrUser}>Delete User</button>
                </div>
                <div>
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={saveUser}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </>

  )
}

