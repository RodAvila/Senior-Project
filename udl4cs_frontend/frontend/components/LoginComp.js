import React, { useState } from "react"
import loginpic from "/public/Asset 27.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";


export default function LoginComp() {

    // Establish API URL to JWT token creation on user login
    const router = useRouter();
    const USER_API_BASE_URL = "http://localhost:3000/api/auth/login";

    // Sets the intial user attribute values to empty on page load
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: ""
    });

    // Re-initializes the user attribute values to empty on getting a server response
    const [responseUser, setResponseUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: ""
    });

    // Handle form input change for users (user attributes are mapped to the 'name' attribute in inputs)
    const handleChange = (event) => {
        const value = event.target.value;
        setUser({ ...user, [event.target.name]: value });
    };

    // Save user to the server database on form submission
    const saveUser = async (e) => {
        e.preventDefault();
        const response = await fetch(USER_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        // generate a cookie based on the responseData, then relocate user to the main resources page if logged in, otherwise log an error to the console
        if (response.ok) {
            const responseData = await response.json();
            const { cookie } = responseData;
            if (cookie) {
                window.location.reload();
            } else {
                console.error('No cookie received');
            }
        } else {
            console.error(response.status)
        }

        // Reset all user inputs to empty after posting user data
        reset(e);
    };

    // Resets all user inputs to empty, called after posting data to database
    const reset = (e) => {
        e.preventDefault();
        setUser({
            firstName: "",
            lastName: "",
            role: "",
            email: "",
            userName: "",
            password: ""
        });
    };

    return (
        <div className="container-lg align-items-center justify-content-center py-2">

            <div className="row">
                <div className="col-lg-6 col-sm-12 col-12">
                    <Image
                        src={loginpic}
                        height={400}
                    />
                </div>
                <div className="col-lg-6 col-sm-12 col-12">
                    <div className="row pb-5">
                        <br />
                        <h1 className="primary">Login</h1>
                        <br />
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text"
                                    name="userName"
                                    value={user.userName}
                                    onChange={(e) => handleChange(e)}
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
                                    onChange={(e2) => handleChange(e2)}
                                    className="form-control"
                                    style={{ borderRadius: '16px!important' }}
                                    id="inputPassword"
                                    placeholder="Password"
                                    required />
                                <label htmlFor="inputPassword">Password</label>
                            </div>
                            <br />
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" onClick={saveUser}
                                    style={{ borderRadius: '16px!important', width: '200px', height: '50px', backgroundColorcolor: '#0B1A73' }}>Login
                                </button>
                            </div>
                        </form>

                    </div>
                    {/* <div className='py-2 row border-top'>
                            <p>Dont have an account? Sign up</p>
                        </div> */}
                    <div className="col d-flex justify-content-center py-5 border-top">
                        <p>Dont have an account? <Link href={`/signup`}>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}