import Image from 'next/image';
import Link from 'next/link';
import { firaSans } from '@/pages/index.js'
import Button from '@mui/material/Button'



export default function Navbar() {
    const isUserLoggedIn = false;
    return (
        <>
            <nav className="navbar bg-light navbar-expand-lg border p-4">
                <div className='container'>
                    <a className="navbar-brand" href="/">
                        <Image src="/udl4cs.png"
                               width={371.52}
                               height={23.04}
                               alt="UDL4CS Logo"
                               priority={true}
                        />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">

                            <li className={`${firaSans.className} nav-item px-2`} >
                                <Link className="nav-link" href="/about" style={{ color: 'var(--bs-blue)', fontSize: '20px' }}>About</Link>
                            </li>

                            <li className={`${firaSans.className} nav-item px-2 `}>
                                <Link className="nav-link" href="/resources" style={{ color: 'var(--bs-blue)', fontSize: '20px' }}>Resources<span className="sr-only"></span></Link>
                            </li>

                            {isUserLoggedIn ? (
                                <>
                                    <li className={`${firaSans}nav-item ms-2 d-none d-md-inline px-2`} >
                                        <Link href="/profile">
                                            <Image
                                                src={"/icon.png"}
                                                width={37}
                                                height={37}
                                                className="rounded-circle">
                                            </Image>
                                        </Link>
                                    </li>


                                </>
                            ) : (
                                <>
                                    {/* <li className={`${firaSans}nav-item ms-2 d-none d-md-inline px-2`}>
                                        <Link className='btn btn-secondary btn-rounded' href="/signup">Sign Up
                                        </Link>
                                    </li> */}
                                    <li className={`${firaSans.className} nav-item px-2`}>
                                        <Link className="nav-link" href="/login" style={{ color: 'var(--bs-blue)', fontSize: '20px' }}>Log In</Link>
                                    </li>
                                    <li className="nav-item d-md-none">
                                        <Link className="nav-link" href="/signup">Sign Up</Link>
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