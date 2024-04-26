import Link from 'next/link';
import Navbar from "../components/Navbar";
import SignUpComp from "../components/SignUpComp";

export default function SignUp() {
    // Returns navbar and sign up component when user goes to /signup
    return (
        <>
            <Navbar></Navbar>
            <div className='py-5 '>
                <SignUpComp></SignUpComp>
            </div>

        </>
    )
}