import React, {useState} from "react"

export default function LoginComp() {
    const USER_API_BASE_URL = "http://localhost:8080/user1";

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: ""
    });

    const [responseUser, setResponseUser] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        userName: "",
        password: ""
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setUser({ ...user, [event.target.name]: value });
    };

    const saveUser = async(e) => {
        e.preventDefault();
        const response = await fetch(USER_API_BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
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
            password: ""
        });
    };

    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-12">
                <br/>
                <h1>Login</h1>
                <br/>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text"
                               name="userName"
                               value={user.userName}
                               onChange={(e) => handleChange(e)}
                               className="form-control"
                               style={{borderRadius: '16px!important'}}
                               id="inputuserName"
                               placeholder="Username"
                               required/>
                        <label htmlFor="inputuserName">Username</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="password"
                               name="password"
                               value={user.password}
                               onChange={(e2) => handleChange(e2)}
                               className="form-control"
                               style={{borderRadius: '16px!important'}}
                               id="inputPassword"
                               placeholder="Password"
                               required/>
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary" onClick={saveUser}
                                style={{borderRadius: '16px!important', width: '200px', height: '50px'}}>Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}