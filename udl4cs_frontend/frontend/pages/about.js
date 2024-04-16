import React from 'react'
import Navbar from '../components/Navbar';
import Image from 'next/image';
const About = () => {
    return (
        <>
            <Navbar></Navbar>
            <section className="bg-light mt-5">
                <div className="container-lg">
                    <div className="text-center">
                        <h2>About</h2>

                    </div>
                </div>
            </section>
        </>

        //<div>About</div>

    )
}

export default About;