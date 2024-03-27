import Image from "next/image";
import Link from "next/link";

import Navbar from "/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

export default function Home() {


    return (
        // <>
        //     <Navbar></Navbar>
        //     <div className="container d-flex align-items-center justify-content-center">
        //         <div className="col-lg-6 col-sm-12 col-12 text-center">
        //             <br />
        //             <h1 className="text-primary" style={firaSans.style}>Welcome to UDL4CS</h1>
        //             <br />
        //         </div>
        //     </div>
        // </>
        <>

            <Navbar></Navbar>
            <section>
                <div className="container-lg d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 col-sm-12 col-12 text-center">
                        <br />
                        <h1 className="primary">Welcome to UDL4CS</h1>
                        <br />
                    </div>
                </div>
            </section>
        </>
    );
}