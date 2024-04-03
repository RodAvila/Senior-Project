import { useState, useEffect } from "react";
export default function EditProfile({ }) {
    // for now
    const USER_API_BASE_URL = "http://localhost:8080/user1/1";
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

    const handleChange = (event) => {
        const value = event.target.value;
        setUserData({ ...userData, [event.target.name]: value });
    }

    const saveUser = async (e) => {
        e.preventDefault();
        const response = await fetch(USER_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        reset(e);
    };




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
                                               value={userData.firstName}
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
                                            name="password"
                                            value={userData.lastName}
                                            onChange={(e2) => handleChange(e2)}
                                            className="form-control"
                                            style={{ borderRadius: '16px!important' }}
                                            id="inputPassword"
                                            placeholder="Password"
                                            required />
                                        <label htmlFor="inputPassword">Last Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text"
                                               name="role"
                                               value={userData.role}
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
                                               value={userData.email}
                                            //onChange={(e4) => handleChange(e4)}
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
                                               name="user1name"
                                               value={userData.user1name}
                                               onChange={(e5) => handleChange(e5)}
                                               className="form-control"
                                               style={{ borderRadius: '16px!important' }}
                                               id="inputuser1name"
                                               placeholder="Username"
                                               required />
                                        <label htmlFor="inputuser1name">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password"
                                               name="password"
                                               value={userData.password}
                                               onChange={(e6) => handleChange(e6)}
                                               className="form-control"
                                               style={{ borderRadius: '16px!important' }}
                                               id="inputPassword"
                                               placeholder="Password"
                                               required />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={saveUser}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}
