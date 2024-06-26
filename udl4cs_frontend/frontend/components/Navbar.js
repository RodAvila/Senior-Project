import Image from 'next/image';
import Link from 'next/link';
import UDL4CS_logo from '/public/UDL4CS Logo-horizontal.svg'
import '../styles/component.module.css'
import { useState, useEffect, useContext } from 'react';
import { useAuth } from '@/AuthContext'
import { useRouter } from "next/router";

export default function Navbar() {
    const [userData, setUserData] = useState(null)
    const { isAuthenticated } = useAuth()
    const { authId } = useAuth()
    const { userProfile } = useAuth()
    const isUserLoggedIn = isAuthenticated
    const USER_API_BASE_URL = "http://localhost:8080/user1/" + authId;



    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const newUser = await response.json();
                setUserData(newUser);
            } catch (error) {
                console.log(error);
            }

        };
        fetchData();
    }, [authId]);
    //console.log(userData.userName)
    return (
        /* The navbar includes the buttons to access the pages of the website. There is the About page, the Resources page, and the profile page.  */
        <>

            <nav className="navbar bg-light navbar-expand-lg border p-4">
                <div className='container'>
                    <div>
                        <a className="navbar-brand" href="/">
                            <Image
                                priority={true}
                                src={UDL4CS_logo}
                                alt="UDL4CS Logo" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item px-2" >
                                <a className="nav-link" href="/" style={{ fontSize: '20px', fontWeight: "bold" }}>About</a>
                            </li>

                            <li className="nav-item px-2">
                                <a className="nav-link" href="/resources" style={{ fontSize: '20px', fontWeight: "bold" }}>Resources<span className="sr-only"></span></a>
                            </li>


                            {isUserLoggedIn && userData?.imageLink && (
                                <li className="nav-item ms-2 d-none d-md-inline px-2" >
                                    <Link href="/profile">
                                        <Image
                                            src={userData.imageLink}
                                            width={37}
                                            height={37}
                                            className="rounded-circle"
                                        />
                                    </Link>
                                </li>
                            )}
                            {!isUserLoggedIn && (
                                <>
                                    <li className="nav-item px-2">
                                        <a className="nav-link" href="/login" style={{ fontSize: '20px', fontWeight: "bold" }}>Log In</a>
                                    </li>
                                    <li className="nav-item d-md-none">
                                        <a className="nav-link subheader" href="/signup">Sign Up</a>
                                    </li>
                                    <li className="nav-item d-md-none">
                                        <a className="nav-link" href="/login">Log In</a>
                                    </li>
                                </>
                            )}

                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}