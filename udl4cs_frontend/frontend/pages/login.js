import Link from 'next/link';
import Navbar from "../components/Navbar";
import LoginComp from "../components/LoginComp";


export default function LogIn() {
    // Returns the navbar and login component when user goes to /login
    return (
        <>
            <Navbar></Navbar>
            <div className='py-5 '>
                <LoginComp></LoginComp>
            </div>
        </>
    )
}