import Image from 'next/image';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                            <li className="nav-item">
                                <a className="nav-link" href="/resources">Resources<span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}