import Link from 'next/link';
import Navbar from "../components/Navbar";
import LoginComp from "../components/LoginComp";


export default function LogIn() {
    return (
        <>
            <Navbar></Navbar>
            <div className='py-5 '>
                <LoginComp></LoginComp>
            </div>

            {/* <div className='container d-flex flex-column align-items-center justify-content-center'>
                <div className='py-2 row border-top'>
                    <p>Dont have an account? Sign up</p>
                </div>
                <div className='row'>
                    <div className="col d-flex justify-content-center">
                        <Link href={`/signup`} >
                            <button className="btn btn-primary">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div> */}
        </>
    )
}