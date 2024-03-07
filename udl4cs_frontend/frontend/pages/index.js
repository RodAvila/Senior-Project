import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
    <>
        <Navbar></Navbar>
        <div className="container d-flex align-items-center justify-content-center">
            <div className="col-lg-6 col-sm-12 col-12 text-center">
                <br/>
                <h1>Welcome to UDL4CS</h1>
                <br/>
            </div>
        </div>
    </>
  );
}
