import Link from 'next/link';
import Navbar from "../components/Navbar";

export default function SignUp() {
    return (
        <>
            <div className="container">
                <Link href="/">Home</Link>
                <br/>
                <h2>Sign Up</h2>
                <form>
                    <input minLength='3' name='username' id='username' type='text' placeholder='Username'
                           required></input><br/>
                    <input minLength='5' name='password' id='password' type='password' placeholder='Password'
                           required></input><br/>
                    <input minLength='5' name='passwordCheck' id='passwordCheck' type='password'
                           placeholder='Reenter Password'
                           required></input><br/>
                    <input type="submit" value="Signup"></input>
                </form>
            </div>
        </>
    )
}