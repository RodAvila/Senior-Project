import Link from 'next/link';
import Navbar from "../components/Navbar";
import SignUpComp from "../components/SignUpComp";

export default function SignUp() {
    return (
        <>
            <Navbar></Navbar>
            <div className='py-5 '>
                <SignUpComp></SignUpComp>
            </div>

        </>
    )
}