import React from "react"

export default function SignUpComp() {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-12">
                <br/>
                <h1>Signup</h1>
                <br/>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputFirstName" placeholder="First Name"
                               required/>
                        <label htmlFor="inputFirstName">First Name</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputLastName" placeholder="Last Name"
                               required/>
                        <label htmlFor="inputLastName">Last Name</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputRole" placeholder="Role"
                               required/>
                        <label htmlFor="inputRole">Role</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputEmail" placeholder="Email"
                               aria-describedby="emailHelp" required/>
                        <label htmlFor="inputEmail">Email</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputUsername" placeholder="Username"
                               required/>
                        <label htmlFor="inputUsername">Username</label>
                    </div>
                    <br/>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" style={{borderRadius: '16px!important'}}
                               id="inputPassword" placeholder="Password"
                               required/>
                        <label htmlFor="inputPassword">Password</label>
                    </div>
                    <br/>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary"
                                style={{borderRadius: '16px!important', width: '200px', height: '50px'}}>Signup
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}