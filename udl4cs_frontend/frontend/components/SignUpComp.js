import React, { useRef, useState } from "react";

export default function SignUpComp() {
    const USER_API_BASE_URL = "http://localhost:8080/user1";

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: "",
        imageLink: ""
    });

    const [responseUser, setResponseUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: "",
        imageLink: ""
    });

    const [image, setImage] = useState("")

    const handleChange = (event) => {
        const value = event.target.value;
        setUser({ ...user, [event.target.name]: value });
    };


    const saveUser = async (e) => {
        e.preventDefault();

        const response = await fetch(USER_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        console.log(user);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        reset(e);
    };

    const reset = (e) => {
        e.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            role: "",
            email: "",
            userName: "",
            password: "",
            imageLink: ""
        });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-12">
                <br />
                <h1 className="primary">Signup</h1>
                <br />
                <form>
                    <div className="form-floating mb-3">
                        <input type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={(e) => handleChange(e)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputFirstName"
                            placeholder="First Name"
                            required />
                        <label htmlFor="inputFirstName">First Name</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={(e2) => handleChange(e2)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputLastName"
                            placeholder="Last Name"
                            required />
                        <label htmlFor="inputLastName">Last Name</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="text"
                            name="role"
                            value={user.role}
                            onChange={(e3) => handleChange(e3)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputRole"
                            placeholder="Role"
                            required />
                        <label htmlFor="inputRole">Role</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="email"
                            name="email"
                            value={user.email}
                            onChange={(e4) => handleChange(e4)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputEmail"
                            placeholder="Email"
                            aria-describedby="emailHelp"
                            required />
                        <label htmlFor="inputEmail">Email</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="text"
                            name="userName"
                            value={user.userName}
                            onChange={(e5) => handleChange(e5)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputuserName"
                            placeholder="Username"
                            required />
                        <label htmlFor="inputuserName">Username</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="password"
                            name="password"
                            value={user.password}
                            onChange={(e6) => handleChange(e6)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputPassword"
                            placeholder="Password"
                            required />
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <br />
                    <div className="form-floating mb-3">
                        <input type="text"
                            name="imageLink"
                            value={user.imageLink}
                            onChange={(e9) => handleChange(e9)}
                            className="form-control"
                            style={{ borderRadius: '16px!important' }}
                            id="inputImageData"
                            placeholder="Upload Profile Picture Link"
                        ></input>
                        <label htmlFor="inputImageData">Upload Profile Picture Link</label>
                    </div>
                    <br />
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={saveUser}
                            style={{ borderRadius: '16px!important', width: '200px', height: '50px' }}>Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
