import Link from 'next/link';
import Navbar from "../components/Navbar";
import LoginComp from "../components/LoginComp";

export default function LogIn() {
    return (
        <>
            <Navbar></Navbar>
            <LoginComp></LoginComp>
        </>
    )
}